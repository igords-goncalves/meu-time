import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useApi } from './useApi';
import { Countries } from '../types/countries';

const COUNTRIES_CACHE_KEY = 'meu-time:countries:v1';

const groupCountriesBy3 = (items: Countries[]): Countries[][] => {
  const grouped: Countries[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    grouped.push(items.slice(i, i + 3));
  }
  return grouped;
};

const readCountriesCache = (): Countries[][] | null => {
  const raw = localStorage.getItem(COUNTRIES_CACHE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every(Array.isArray)) {
      return parsed as Countries[][];
    }
    localStorage.removeItem(COUNTRIES_CACHE_KEY);
    return null;
  } catch {
    localStorage.removeItem(COUNTRIES_CACHE_KEY);
    return null;
  }
};

export const useFetchCountres = () => {
  const [countries, setCountries] = useState<Countries[][]>([]);
  const [limitError, setLimitError] = useState<string | null>(null);
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

    const cached = readCountriesCache();
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
  };
};
