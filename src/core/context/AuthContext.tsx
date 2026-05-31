import { createContext } from 'react';

interface AuthContextType {
  apiKey: string | null;
  setApiKey: (apiKey: string | null) => void;
  login: (apiKey: string, user: User) => void;
  logout: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
