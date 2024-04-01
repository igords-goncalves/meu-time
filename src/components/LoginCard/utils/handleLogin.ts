import { err, success } from '../../../utils/toatsFunctions';

export const handleLogin = async (api: any) => {
  try {
    const data = await api.login();
    success(`Login efetuado com sucesso ${data.response.account.firstname}! `);
    return data;
  } catch (error) {
    const errorMessage: HTMLElement | HTMLSpanElement | any =
      document.querySelector('.u-iserror');
    errorMessage.style.display = 'block';
    err(
      `Desculpe algo saiu errado, verifique sua chave de acesso e tente novamente.`,
    );
    throw new Error('Erro no login');
  }
};
