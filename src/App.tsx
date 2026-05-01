import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/__layout__/Grid';
import { ToastContainer } from 'react-toastify';
import { MainRoute as Route } from './router/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';
import { Provider } from './Providers/Provider';
import { privateRoute } from './router/privateRoute';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <Provider>
      <Router>
        <Grid>
          {ROUTES.map(route => (
            <Route key={route.path} path={route.path}>
              {privateRoute() ? <route.component /> : <Login />}
            </Route>
          ))}
        </Grid>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
