import { Button } from '../common/Button';
import logoLogin from '../../../public/logo-login.svg';
import './style.scss';

const buttonStyle = {
  fontSize: '1.5em',
  padding: '16px 100px',
};

export const LoginCard = () => {
  return (
    <div className="c-logincard">
      <img
        src={logoLogin}
        alt="Logomarca para login"
        className="c-logincard__img"
      />
      <hr className="c-logincard__divider" />
      <div className="c-logincard__form">
        <input
          className="c-logincard__input"
          type="password"
          onChange={e => console.log(e.target.value)}
        />
        <span className="u-iserror">Aqui existe um erro.</span>
      </div>
      <Button
        label="ENTRAR"
        onClick={() => console.log('login')}
        style={buttonStyle}
      />
      <p className="c-logincard__text">ou</p>
      <a
        className="c-logincard__link"
        target="_blank"
        href="https://dashboard.api-football.com/register"
        rel="noreferrer"
      >
        Crie uma conta em API-FOOTBALL
      </a>
    </div>
  );
};
