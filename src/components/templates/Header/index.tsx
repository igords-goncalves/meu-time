import './style.scss';
import logoName from '../../../assets/img/logo-name-small.svg';
import logoFullBig from '../../../assets/img/logo-full-big.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="c-header">
      <div className="c-header__banner">
        <nav className="c-header__nav u-container">
          <img
            src={logoName}
            alt="Logomarca meu time"
            className="c-header__logo"
            onClick={() => navigate('/')}
          />
          <ul className="c-header__menu">
            <li className="c-header__item">
              <Link className="c-header__link" to="/home">
                Home
              </Link>
            </li>
            <li className="c-header__item">
              <Link className="c-header__link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
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
