import { Button } from '../../common/Button';

import './style.scss';
import logoName from '../../../../public/logo-name-small.svg';
import logoFullBig from '../../../../public/logo-full-big.svg';

export const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__menu u-container">
        <img
          src={logoName}
          alt="Logomarca meu time"
          className="c-header__logo"
        />
        <Button label="Login" onClick={() => console.log('teste')} />
      </div>
      <div className="c-header__banner">
        <div className="u-container">
          <img
            src={logoFullBig}
            alt="Logomarca meu time"
            className="c-header__logo"
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
