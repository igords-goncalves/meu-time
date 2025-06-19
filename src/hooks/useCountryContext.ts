import { useContext } from 'react';
import { CountryContext } from '../core/context/CountryContext';

export const useCountryContext = () => {
  const countries = useContext(CountryContext);
  if (countries === null) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return {
    countries,
  };
};
