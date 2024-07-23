import { connect } from 'react-redux';
import { getApiKey } from '../../redux/actions/apiKey';

import './style.scss';
import { Button } from '../__common__/Button';
import { Error } from '../__common__/Error';
import { Input } from '../__common__/Input';
import { Link } from '../__common__/Link';
import { useApi } from '../../hooks/useApi';
import { handleLogin } from './functions/handleLogin';
import { useNavigate } from 'react-router';
import { Form } from '../__common__/Form';

interface ApiKeyProps {
  apiKey: any;
}

const LoginForm = ({ apiKey }: ApiKeyProps): JSX.Element => {
  const buttonStyle = {
    fontSize: '1.2rem',
    padding: '16px',
  };

  const api = useApi();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log('Passei aqui ...');
    const userData = await handleLogin(api);
    if (userData) navigate('./home');
  };

  return (
    <div className="c-logincard">
      <Form onSubmit={handleSubmit}>
        <div className="c-logincard__form">
          <Input
            type="password"
            placeholder="Insira sua chave de acesso aqui..."
            onChange={apiKey}
          >
            Chave de acesso
          </Input>
          <Error> Chave inválida ou inexistente. Tente novamente. </Error>
        </div>
        <Button type="submit" style={buttonStyle}>
          ENTRAR
        </Button>
      </Form>

      <p className="c-logincard__text">ou</p>
      <Link
        target="_blank"
        href="https://dashboard.api-football.com/register"
        rel="noreferrer"
      >
        Crie uma conta em API-FOOTBALL
      </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
