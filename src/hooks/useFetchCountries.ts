import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useApi } from './useApi';
import { Countries } from '../types/countries';
import { readDataCache } from '../utils/cacheDataStrategy';

const COUNTRIES_CACHE_KEY = 'meu-time:countries:v1';

const groupCountriesBy3 = (items: Countries[]): Countries[][] => {
  const grouped: Countries[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    grouped.push(items.slice(i, i + 3));
  }
  return grouped;
};

export const useFetchCountres = () => {
  const [countries, setCountries] = useState<Countries[][]>([]);
  const [limitError, setLimitError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { user, apiKey } = useAuthContext();
  const hasFetched = useRef(false);
  const lastApiKeyRef = useRef<string | null>(null);

  const api = useApi();

  useEffect(() => {
    if (lastApiKeyRef.current !== apiKey) {
      hasFetched.current = false;
      setLimitError(null);
    }
    lastApiKeyRef.current = apiKey;
  }, [apiKey]);

  useEffect(() => {
    if (hasFetched.current) return;
    if (!user) return;

    const cached = readDataCache<Countries[][]>(COUNTRIES_CACHE_KEY);
    if (cached) {
      setCountries(cached);
      hasFetched.current = true;
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await api.getCountries();

        if (data?.response && data.response.length > 0) {
          const grouped = groupCountriesBy3(data.response);
          setCountries(grouped);
          setCurrentPage(data.paging?.current || 1);
          setTotalPages(data.results || 1);
          localStorage.setItem(COUNTRIES_CACHE_KEY, JSON.stringify(grouped));
          hasFetched.current = true;
          return;
        }

        const errorMsg = data?.errors;
        setLimitError(errorMsg?.requestss);
        hasFetched.current = true;
      } catch (error) {
        console.error('Erro ao buscar os dados', error);
        hasFetched.current = true;
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api, user]);

  return {
    countries,
    limitError,
    isLoading,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
