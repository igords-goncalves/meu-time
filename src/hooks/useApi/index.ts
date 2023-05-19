import { createAxiosInstance } from '../../core/services/api';

const axiosInstaces = createAxiosInstance();

export const useApi = () => ({
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
});
