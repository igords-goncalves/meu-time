import { createContext } from 'react';

interface AuthContextType {
  apiKey: string | null;
  setApiKey: (apiKey: string) => void;
  login: (apiKey: string, user: any) => void;
  logout: () => void;
  user: any;
}

export const AuthContext = createContext<AuthContextType | null>(null);
