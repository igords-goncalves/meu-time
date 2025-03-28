import { connect } from 'react-redux';
import { getApiKey } from '../../redux/actions/apiKey';

import './style.scss';
import { Button } from '../__common__/Button';
import { Error as ErrorComponent } from '../__common__/Error';
import { Link } from '../__common__/Link';
import { useApi } from '../../hooks/useApi';
import { Form } from '../__common__/Form';
import { useEffect, useRef } from 'react';
import useLogin from '../../hooks/useLogin';

const LoginForm = ({ apiKey }: any): JSX.Element => {
  const api = useApi();
  const { handleSubmit } = useLogin(api);

  const inputRef: any = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="c-logincard">
      <Form onSubmit={handleSubmit}>
        <div>
          <p className="c-login_title">Meu Time</p>
        </div>
        <div className="c-logincard__form">
          <label className="c-logincard__label">Chave de Acesso</label>
          <input
            ref={inputRef}
            className="c-logincard__input"
            type="password"
            placeholder="ex: 1234567890"
            onChange={e => apiKey(e.target.value)}
          />
          <ErrorComponent>
            {' '}
            Chave inválida ou inexistente. Tente novamente.{' '}
          </ErrorComponent>
        </div>
        <Button type="submit">ENTRAR</Button>
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
