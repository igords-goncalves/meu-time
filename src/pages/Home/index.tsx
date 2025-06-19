import { CountriesSlide } from './components/CountriesSlide';
import { LeaguesSlide } from './components/LeaguesSlide';
import { Footer } from '../../components/__templates__/Footer';
import { NavBar } from '../../components/__templates__/NavBar';
import './style.scss';

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="section__countries">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Países</h2>
            <p className="section__text">
              Selecione um país para lsitas todas as ligas abaixo.
            </p>
          </div>
          <div className="slider">
            <CountriesSlide />
          </div>
        </div>
      </section>
      <hr />
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Ligas</h2>
            <p className="section__text">
              Selecione uma liga na lista e defina uma temporada para listar os
              time abaixo.
            </p>
          </div>
          <div className="slider">
            <LeaguesSlide />
          </div>
        </div>
      </section>
      <hr />
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Times</h2>
            <p className="section__text">
              Selecione um time da liga acima para ver todas as informações.
            </p>
          </div>
          <div className="slider">
            <div>Tabela de times presentes na liga</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
