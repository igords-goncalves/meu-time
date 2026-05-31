import { ReactNode, useMemo } from 'react';
import { useFetchCountres } from '../../hooks/useFetchCountries';
import { CountryContext } from './CountryContext';

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const { countries, isLoading, currentPage, totalPages } = useFetchCountres();

  const value = useMemo(
    () => ({ countries, isLoading, currentPage, totalPages }),
    [countries, currentPage, isLoading, totalPages],
  );
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
