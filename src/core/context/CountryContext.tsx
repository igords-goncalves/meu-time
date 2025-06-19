import { createContext } from 'react';
import { Countries } from '../../types/countries';

export const CountryContext = createContext<Countries[][]>([]);
