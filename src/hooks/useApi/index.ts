import { useSelector } from 'react-redux';
import { createAxiosInstance } from '../../core/services/api';

export const useApi = () => {
  const apiKey = useSelector((state: any) => state.value.apiKey);
  console.log(apiKey);

  const axiosInstaces = createAxiosInstance(apiKey);
  return {
    login: async () => {
      const res = await axiosInstaces.api.get('/status');
      return res.data;
    },

    // A api que retorna os países não é a mesma que retorna as bandeiras
    getCountries: async () => {
      const res = await axiosInstaces.api.get('/countries');
      return res.data;
    },
  };
};
