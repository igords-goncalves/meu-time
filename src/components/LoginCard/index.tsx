import { connect } from 'react-redux';
import { getApiKey } from '../../redux/actions/apiKey';

import './style.scss';
import logoLogin from '../../assets/img/logo-login.svg';
import { Button } from '../common/Button';
import { useApi } from '../../hooks/useApi';
import { handleLogin } from './utils/hanfleLogin';
import { useNavigate } from 'react-router';

interface ApiKeyProps {
  apiKey: any;
}

const LoginCard = ({ apiKey }: ApiKeyProps): JSX.Element => {
  const buttonStyle = {
    fontSize: '1.5em',
    padding: '16px 100px',
  };

  const api = useApi();
  const navigate = useNavigate();

  const handleClick = async () => {
    const userData = await handleLogin(api);
    if (userData) navigate('./home');
  };

  return (
    <div className="c-logincard">
      <img
        src={logoLogin}
        alt="Logomarca para login"
        className="c-logincard__img"
      />
      <hr className="c-logincard__divider" />
      <div className="c-logincard__form">
        <label className="c-logincard__label">Chave</label>
        <input
          className="c-logincard__input"
          type="password"
          placeholder="Digite sua chave aqui"
          onChange={e => apiKey(e.target.value)}
        />

        <span className="u-iserror">Aqui existe um erro.</span>
      </div>
      <Button label="ENTRAR" onClick={handleClick} style={buttonStyle} />
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

const mapStateToProps = (state: any) => {
  return {
    apiKey: state.value.apiKey,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    apiKey(value: string) {
      const action = getApiKey(value);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
