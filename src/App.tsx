import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/layout/Grid';
import { Footer } from './components/templates/Footer';
import { Header } from './components/templates/Header';
import { Section } from './components/templates/Section';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Grid>
        <Header />
        <Section />
        <Footer />
      </Grid>
      <ToastContainer />
    </>
  );
}

export default App;
