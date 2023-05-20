import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/layout/Grid';
import { Login } from './pages/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Grid>
        <Login />
      </Grid>
      <ToastContainer />
    </>
  );
}

export default App;
