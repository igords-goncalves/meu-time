import { useSelector } from 'react-redux';
import { createAxiosInstance } from '../../core/services/api';

export const useApi = () => {
  const apiKey = useSelector((state: any) => state.value.apiKey);

  const axiosInstaces = createAxiosInstance(apiKey);
  return {
    login: async () => {
      const res = await axiosInstaces.api.get('/status');
      return res.data;
    },

    // fr = france, br = brasil
    getFlags: async (countryCode: string) => {
      const url = `/flags/${countryCode}.svg`;
      const res = await axiosInstaces.apiImage(url);
      return res;
    },
  };
};
