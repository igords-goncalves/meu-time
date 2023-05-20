import { err, success } from '../../../utils/toatsFunctions';

export const handleLogin = async (api: any) => {
  try {
    const data: object = await api.login();
    success(data);
    return data;
  } catch (error) {
    err(error);
    throw new Error();
  }
};
