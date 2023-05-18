import './App.scss';
import { Grid } from './components/layout/Grid';
import { Footer } from './components/templates/Footer';
import { Header } from './components/templates/Header';
import { Section } from './components/templates/Section';

function App() {
  return (
    <Grid>
      <Header />
      <Section />
      <Footer />
    </Grid>
  );
}

export default App;
