import { ReactNode } from 'react';
import { AuthProvider } from '../core/context/AuthProvider';
import { CodeCountryProvider } from '../core/context/CodeCountryProvider';
import { CountryProvider } from '../core/context/CountryProvider';
import { LeagueProvider } from '../core/context/LeagueProvider';

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <CountryProvider>
        <CodeCountryProvider>
          <LeagueProvider>{children}</LeagueProvider>
        </CodeCountryProvider>
      </CountryProvider>
    </AuthProvider>
  );
};
