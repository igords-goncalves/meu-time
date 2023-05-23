import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance {
  api: AxiosInstance;
  apiImage: AxiosInstance;
}

export const createAxiosInstance = (apiKey?: string): CustomAxiosInstance => {
  const dataInstance = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-apisports-key': apiKey,
    },
  });

  const imageInstance = axios.create({
    baseURL: 'https://media.api-sports.io',
    headers: {
      'x-apisports-key': apiKey,
    },
  });

  return {
    api: dataInstance,
    apiImage: imageInstance,
  };
};
