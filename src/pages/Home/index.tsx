import { Footer } from '../../components/__templates__/Footer';
import { NavBar } from '../../components/__templates__/NavBar';
import './style.scss';
import CountriesHeader from './components/CountriesHeader';
import LeaguesHeader from './components/LeaguesHeader';
import TeamsHeader from './components/TeamsHeader';

export const Home = () => {
  return (
    <>
      <NavBar />
      <CountriesHeader />
      <hr />
      <LeaguesHeader />
      <hr />
      <TeamsHeader />
      <Footer />
    </>
  );
};
