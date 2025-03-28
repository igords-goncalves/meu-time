import { useNavigate } from 'react-router-dom';
import { useAuth } from '../core/context/AuthContext';
import { erro, success } from '../utils/toatsFunctions';

const useLogin = (api: any) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (api: any) => {
    try {
      const data = await api.login();
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

  const handleSubmit = async () => {
    const userData = await handleLogin(api);

    if (userData) {
      login(userData.response);
    }
    if (userData) navigate('./home');
  };

  return {
    handleSubmit,
  };
};

export default useLogin;
