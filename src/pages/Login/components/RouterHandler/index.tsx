import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Login } from '../..';
import { ROUTES } from '../../../../constants/routes';
import { useAuthContext } from '../../../../hooks/useAuthContext';
import { privateRoute } from '../../../../router/privateRoute';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Grid } from '../../../../components/__layout__/Grid';

export const RouteHandler = () => {
  const { apiKey, user } = useAuthContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica autenticação inicial e sempre que apiKey ou user mudam
    // se estiver autenticado a rota é liberada, caso contrário, redireciona para login
    const checkInitialAuth = async () => {
      try {
        const authenticated = await privateRoute();
        setIsAuthenticated(authenticated);
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setIsAuthenticated(false);
      }
    };
    checkInitialAuth();
  }, [apiKey, user]);

  return (
    <Router>
      <Grid>
        <Routes>
          {ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={isAuthenticated ? <route.component /> : <Login />}
            />
          ))}
        </Routes>
      </Grid>
      <ToastContainer />
    </Router>
  );
};
