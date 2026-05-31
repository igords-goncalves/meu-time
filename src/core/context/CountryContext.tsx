import { createContext } from 'react';
import { Countries } from '../../types/countries';

type CountryContextType = {
  countries: Countries[][];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
};

export const CountryContext = createContext<CountryContextType>({
  countries: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
});
