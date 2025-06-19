import { createContext } from 'react';

interface CodeCountryContextType {
  code: string | null;
  setCode: (code: string) => void;
}

export const CodeCoutryContext = createContext<CodeCountryContextType | null>(
  null,
);
