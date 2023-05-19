import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance {
  api: AxiosInstance;
  apiImage: AxiosInstance;
}

export const createAxiosInstance = (apiKey?: string): CustomAxiosInstance => {
  const dataInstance = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-apisports-key': '8e5d5f70898ac2742cee6f23af4830b8',
    },
  });

  const imageInstance = axios.create({
    baseURL: 'https://media.api-sports.io',
    headers: {
      'x-apisports-key': '8e5d5f70898ac2742cee6f23af4830b8',
    },
  });

  return {
    api: dataInstance,
    apiImage: imageInstance,
  };
};
