import './style.scss';
import logoFullBig from '../../assets/img/logo-full-big.svg';

export const Hero = () => {
  return (
    <header className="c-hero">
      <div className="u-container">
        <img
          src={logoFullBig}
          alt="Logomarca meu time"
          className="c-hero__logo-banner"
        />
        <p className="c-hero__text">
          Informações sobre ligas, times, temporadas, estatísticas e jogadores
          tudo em um só lugar.
        </p>
      </div>
    </header>
  );
};
