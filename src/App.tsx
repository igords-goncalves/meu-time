import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/__layout__/Grid';
import { ToastContainer } from 'react-toastify';
import { MainRoute as Route } from './router/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { AuthProvider } from './core/context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Grid>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Grid>
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
