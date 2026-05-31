import { CountriesSlide } from './components/CountriesSlide';
import { LeaguesSlide } from './components/LeaguesSlide';
import { Footer } from '../../components/__templates__/Footer';
import { NavBar } from '../../components/__templates__/NavBar';
import './style.scss';
import { TeamsTable } from './components/TeamsTable';
import { useCodeCountry } from '../../hooks/useCodeCountry';
import { useLeaguesContext } from '../../hooks/useLeaguesContext';

export const Home = () => {
  const { code } = useCodeCountry();
  const { selectedLeague } = useLeaguesContext();

  function Countries() {
    return (
      <section className="section__countries">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Países</h2>
            <p className="section__text">
              Selecione um país para listar todas as ligas.
            </p>
          </div>
          <div className="slider">
            <CountriesSlide />
          </div>
        </div>
      </section>
    );
  }

  function Leagues() {
    return (
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Ligas</h2>
            <p className="section__text">
              Selecione uma liga na lista e defina uma temporada para listar os
              times abaixo.
            </p>
          </div>
          {code && (
            <div className="slider">
              <LeaguesSlide />
            </div>
          )}
        </div>
      </section>
    );
  }

  function Teams() {
    return (
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Times</h2>
            <p className="section__text">
              Clique no botão <strong>+ detalhes</strong> de um time para ver
              mais informações sobre o time selecionado.
            </p>
          </div>
          {selectedLeague && (
            <div className="slider">
              <TeamsTable />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <NavBar />
      <Countries />
      <hr />
      <Leagues />
      <hr />
      <Teams />
      <Footer />
    </>
  );
};
