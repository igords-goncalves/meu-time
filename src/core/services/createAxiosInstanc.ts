import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance {
  api: AxiosInstance;
}

export const createAxiosInstance = (apiKey?: string): CustomAxiosInstance => {
  const dataInstance = axios.create({
    baseURL: import.meta.env.VITE_FOOTBALL_API_URL,
    headers: {
      'x-apisports-key': apiKey,
    },
  });

  return {
    api: dataInstance,
  };
};
