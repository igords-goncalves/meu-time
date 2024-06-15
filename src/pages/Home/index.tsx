import { Slide } from '../../components/Slide';
import { Leagues } from '../../components/Leagues';
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
            <p className="section__text">Selecione um país abaixo.</p>
          </div>
          <Slide />
        </div>
      </section>
      <hr />
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Ligas</h2>
            <p className="section__text">
              Selecione uma liga na lista defina uma temporada opcional e
              escolha uma time, para ver todas as informações do time escolhido,
              click no botão ver.
            </p>
          </div>
          <Leagues />
        </div>
      </section>
      <Footer />
    </>
  );
};
