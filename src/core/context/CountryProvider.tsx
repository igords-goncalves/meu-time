import { ReactNode } from 'react';
import { useFetchCountres } from '../../hooks/useFetchCountries';
import { CountryContext } from './CountryContext';

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const { countries, isLoading, currentPage, totalPages } = useFetchCountres();

  return (
    <CountryContext.Provider
      value={{ countries, isLoading, currentPage, totalPages }}
    >
      {children}
    </CountryContext.Provider>
  );
};
