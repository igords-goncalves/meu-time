import { ReactNode, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Inicializa com dados do sessionStorage, se existirem
  useEffect(() => {
    const storedApiKey = sessionStorage.getItem('apiKey');
    const storedUser = sessionStorage.getItem('user');

    if (storedApiKey) {
      setApiKey(storedApiKey);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao parsear user do sessionStorage:', error);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('apiKey');
      }
    }

    setIsInitialized(true);
  }, []);

  const login = (apiKey: string, user: User) => {
    if (!apiKey || !user) {
      throw new Error('API Key e User são obrigatórios');
    }

    // Armazena primeiro no sessionStorage
    sessionStorage.setItem('apiKey', apiKey);
    sessionStorage.setItem('user', JSON.stringify(user));

    // Depois atualiza o state
    setApiKey(apiKey);
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem('apiKey');
    sessionStorage.removeItem('user');
    setUser(null);
    setApiKey(null);
  };

  return (
    <AuthContext.Provider
      value={{ apiKey, setApiKey, user, setUser, login, logout }}
    >
      {isInitialized && children}
    </AuthContext.Provider>
  );
};
