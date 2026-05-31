import { useCodeCountry } from '../../../../hooks/useCodeCountry';
import { LeaguesSlide } from '../LeaguesSlide';

const LeaguesHeader = () => {
  const { code } = useCodeCountry();

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
};

export default LeaguesHeader;
