import { useContext } from 'react';
import { CodeCoutryContext } from '../core/context/CodeCountryContext';

export const useCodeCountry = () => {
  const context = useContext(CodeCoutryContext);
  if (!context) {
    throw new Error('useCodeCountry must be used within CodeCountryProvider');
  }
  return context;
};
