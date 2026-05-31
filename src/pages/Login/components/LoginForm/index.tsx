import './style.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LockOpen } from 'lucide-react';
import { useAuthContext } from '../../../../hooks/useAuthContext';
import { success } from '../../../../utils/toatsFunctions';
import { useFocusInput } from '../../../../hooks/useFocusInput';
import { createAxiosInstance } from '../../../../core/services/createAxiosInstanc';
import {
  Button,
  Form,
  Link,
  Error as ErrorComponent,
} from '../../../../components/__common__';

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { inputRef } = useFocusInput();
  const { login } = useAuthContext();

  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    if (!apiKeyInput || apiKeyInput.trim().length === 0) {
      setError(true);
      setErrorMessage('A chave de acesso é obrigatória.');
      return;
    }

    try {
      // Cria axios com a chave do input (NÃO do context)
      const axiosInstance = createAxiosInstance(apiKeyInput);
      const response = await axiosInstance.api.get('/status');

      // Verifica se há erros na resposta da API não da requisição,
      // mas do conteúdo da resposta
      if (response.data.errors && response.data.errors.length > 0) {
        setError(true);
        return;
      }

      // Só aqui: faz login se passou na validação
      login(apiKeyInput, response.data.response);

      // Limpa o input e navega
      // setApiKeyInput('');
      success(
        `Login efetuado com sucesso ${response.data.response.account.firstname}!`,
      );
      navigate('/home');
    } catch (error: any) {
      // Verifica a request quanto ao HTTP
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('apiKey');
      console.error('Erro no login:', error);
      setErrorMessage('Chave de acesso inválida. Verifique e tente novamente.');
      setError(true);
    }
  };

  return (
    <div className="c-logincard">
      <Form onSubmit={handleSubmit}>
        <div>
          <p className="c-login_title" id="c-login-title">
            Meu Time
          </p>
        </div>
        <div className="c-logincard__form">
          <label className="c-logincard__label">Chave de Acesso</label>
          <div className="c-logincard__input-wrapper">
            <input
              ref={inputRef}
              className="c-logincard__input"
              type={showKey ? 'text' : 'password'}
              placeholder="ex: 1234567890"
              value={apiKeyInput}
              style={error ? { borderColor: 'red' } : {}}
              onChange={e => {
                setApiKeyInput(e.target.value);
                setError(false);
                setErrorMessage('');
              }}
              data-testid="cy-login-input"
            />
            <button
              type="button"
              data-testid="cy-toggle-lock-btn"
              className="c-logincard__toggle-btn"
              onClick={() => setShowKey(prev => !prev)}
              aria-label={
                showKey ? 'Ocultar chave de acesso' : 'Mostrar chave de acesso'
              }
              aria-pressed={showKey}
            >
              {showKey ? (
                <LockOpen size={18} color={error ? '#ff0000' : '#999'} />
              ) : (
                <Lock size={18} color={error ? '#ff0000' : '#999'} />
              )}
            </button>
          </div>
          {error && <ErrorComponent>{errorMessage}</ErrorComponent>}
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
