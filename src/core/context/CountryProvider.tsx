import { ReactNode } from 'react';
import { useFetchCountres } from '../../hooks/useFetchCountries';
import { CountryContext } from './CountryContext';

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const { countries } = useFetchCountres();

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};
