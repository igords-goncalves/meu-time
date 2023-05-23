import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/layout/Grid';
import { ToastContainer } from 'react-toastify';
import { MainRoutes } from './router/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Grid>
        <MainRoutes />
      </Grid>
      <ToastContainer />
    </Router>
  );
}

export default App;
