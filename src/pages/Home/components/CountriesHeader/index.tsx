import { CountriesSlide } from '../CountriesSlide';
import './style.scss';

const CountriesHeader = () => {
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
};

export default CountriesHeader;
