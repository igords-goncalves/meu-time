import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Grid } from './components/__layout__/Grid';
import { ToastContainer } from 'react-toastify';
import { MainRoute as Route } from './router/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';
import { Provider } from './Providers/Provider';
import { useAuthContext } from './hooks/useAuthContext';
import { privateRoute } from './router/privateRoute';
import { ROUTES } from './constants/routes';

function RouteHandler() {
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
        {ROUTES.map(route => (
          <Route key={route.path} path={route.path}>
            {isAuthenticated ? <route.component /> : <Login />}
          </Route>
        ))}
      </Grid>
      <ToastContainer />
    </Router>
  );
}

function App() {
  return (
    <Provider>
      <RouteHandler />
    </Provider>
  );
}

export default App;
