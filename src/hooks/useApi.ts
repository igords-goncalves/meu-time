import { createAxiosInstance } from '../core/services/createAxiosInstanc';
import { useAuthContext } from './useAuthContext';

export const useApi = () => {
  const { apiKey } = useAuthContext();

  const axiosInstances = () => createAxiosInstance(apiKey || undefined);

  return {
    login: async () => {
      const res = await axiosInstances().api.get('/status');
      return res.data;
    },

    getCountries: async () => {
      const res = await axiosInstances().api.get('/countries');
      return res.data;
    },

    getLeagues: async (country: string | null) => {
      const res = await axiosInstances().api.get(`/leagues?country=${country}`);
      return res.data;
    },
  };
};
