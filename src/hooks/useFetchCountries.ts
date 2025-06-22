import { useState, useRef, useEffect } from 'react';
import { useApi } from './useApi';
import { Countries } from '../types/countries';

export const useFetchCountres = () => {
  const [countries, setCountries] = useState<Countries[][]>([]);
  const [limitError, setLimitError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  const api = useApi();

  useEffect(() => {
    if (hasFetched.current) return;

    const fetchData = async () => {
      const data = await api.getCountries();

      try {
        if (data.response && data.response.length > 0) {
          setCountries(prev => {
            const newGrouped = [];
            for (let i = 0; i < data.response.length; i += 3) {
              newGrouped.push(data.response.slice(i, i + 3));
            }
            return JSON.stringify(prev) === JSON.stringify(newGrouped)
              ? prev
              : newGrouped;
          });
        } else {
          const errorMsg = await data.errors;
          setLimitError(errorMsg.requestss);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados', error);
      }
    };
    fetchData();
    hasFetched.current = true;
  }, [api]);

  return {
    countries,
    limitError,
    isLoading: countries === undefined,
  };
};
