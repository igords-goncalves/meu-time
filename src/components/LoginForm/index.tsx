import './style.scss';
import { Button } from '../__common__/Button';
import { Error as ErrorComponent } from '../__common__/Error';
import { Link } from '../__common__/Link';
import { useApi } from '../../hooks/useApi';
import { Form } from '../__common__/Form';
import { useEffect, useRef } from 'react';
import { success, erro } from '../../utils/toatsFunctions';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const api = useApi();

  const { login, setApiKey, apiKey } = useAuthContext();

  const handleSubmit = async () => {
    try {
      const data = await api.login();

      if (data && apiKey) {
        login(apiKey, data.response);
        navigate('./home');
      }
      success(
        `Login efetuado com sucesso ${data.response.account.firstname}! `,
      );
      return data;
    } catch (error) {
      const errorMessage: HTMLElement | HTMLSpanElement | any =
        document.querySelector('.u-iserror');
      errorMessage.style.display = 'block';
      erro(
        `Desculpe algo saiu errado, verifique sua chave de acesso e tente novamente.`,
      );
      throw new Error('Erro no login');
    }
  };

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
            onChange={e => setApiKey(e.target.value)}
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
