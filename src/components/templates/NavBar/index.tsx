import { Link, useNavigate } from 'react-router-dom';
import logoName from '../../../assets/img/logo-name-small.svg';
import './style.scss';

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="c-header">
      <div className="c-header__wrapper">
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
            <li className="c-header__item">
              <button
                className="c-header__link"
                onClick={() => console.log('Saindo ...')}
              >
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
