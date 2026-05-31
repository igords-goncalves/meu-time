import { createAxiosInstance } from '../core/services/createAxiosInstanc';

export async function privateRoute(): Promise<boolean> {
  const user = sessionStorage.getItem('user');
  const apiKey = sessionStorage.getItem('apiKey');

  // 1. Validação básica: ambos precisam existir e essa verificação
  // acontece logo na montagem do App, antes de renderizar qualquer rota
  if (!user || !apiKey) {
    return false;
  }

  try {
    // 2. Verifica se os dados estão bem formados
    const parsedUser = JSON.parse(user);
    if (!parsedUser || typeof parsedUser !== 'object') {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('apiKey');
      return false;
    }

    // 3. Tenta validar a chave com a API fazendo uma requisição
    // para /status, usando a chave do sessionStorage (NÃO do context)
    const axiosInstance = createAxiosInstance(apiKey);
    const response = await axiosInstance.api.get('/status');

    // 4. Se houver erro na resposta, retorna false
    // api footebol retorna 200 mesmo com chave inválida,
    // então precisamos checar o conteúdo da resposta
    if (response.data.errors && response.data.errors.length > 0) {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('apiKey');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erro ao validar autenticação:', error);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('apiKey');
    return false;
  }
}
