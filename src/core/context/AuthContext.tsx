import { createContext } from 'react';

interface AuthContextType {
  apiKey: string | null;
  setApiKey: (apiKey: string) => void;
  login: (apiKey: string, user: User) => void;
  logout: () => void;
  user: User | null;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
