import { ReactNode, useState } from 'react';
import { CodeCoutryContext } from './CodeCountryContext';

export const CodeCountryProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<string | null>(null);

  return (
    <CodeCoutryContext.Provider value={{ code, setCode }}>
      {children}
    </CodeCoutryContext.Provider>
  );
};
