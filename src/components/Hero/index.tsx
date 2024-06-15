import './style.scss';
import logoFullBig from '../../assets/img/logo-full-big.svg';

export const Hero = () => {
  return (
    <header className="c-header">
      <div className="c-header__banner">
        <div className="u-container">
          <img
            src={logoFullBig}
            alt="Logomarca meu time"
            className="c-header__logo-banner"
          />
          <p className="c-header__text">
            Informações sobre ligas, times, temporadas, estatísticas e jogadores
            tudo em um só lugar.
          </p>
        </div>
      </div>
    </header>
  );
};
