import { ReactNode, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState<string | null>(() => {
    return sessionStorage.getItem('apiKey');
  });
  const [user, setUser] = useState<any | null>(() => {
    return sessionStorage.getItem('user');
  });

  useEffect(() => {
    const storageKey = sessionStorage.getItem('apiKey');
    const storageUser = sessionStorage.getItem('user');

    // Modify the AuthContext to parse the user data from sessionStorage:
    if (storageKey && storageUser) {
      setApiKey(storageKey);
      setUser(JSON.parse(storageUser));
    }
  }, []);

  const login = (apiKey: string, user: any) => {
    sessionStorage.setItem('apiKey', apiKey);
    sessionStorage.setItem('user', JSON.stringify(user));

    setUser(user);
    setApiKey(apiKey);
  };

  const logout = () => {
    sessionStorage.removeItem('apiKey');
    sessionStorage.removeItem('user');
    setUser(null);
    setApiKey(null);
  };

  return (
    <AuthContext.Provider value={{ apiKey, setApiKey, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
