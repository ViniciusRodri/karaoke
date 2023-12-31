import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { StorageEnum } from '../utils/defaults';

export const apiFile = process.env.NEXT_PUBLIC_API_URL;
export const API_KEY = process.env.API_KEY;

export function setup(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        typeof window !== 'undefined' && localStorage.getItem(StorageEnum.ACCESS_TOKEN)
      }`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem(StorageEnum.ACCESS_TOKEN);
          localStorage.removeItem(StorageEnum.CREDENCIAIS);
        }
        toast.info('Sessão expirada. Faça login novamente.');
        window.location.href = '/';
      }

      if (error.response?.status === 403) {
        toast.warning('Você não tem permissão para acessar essa função.');
      }

      if (error.response?.status === 409) {
        toast.warning('Informações inválidas.');
      }

      if (error.response?.status === 500) {
        toast.error('Erro interno de servidor. Aguarde e tente novamente.');
      }

      return Promise.reject(error.response?.data);
    },
  );

  api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem(StorageEnum.ACCESS_TOKEN);

      // Atribui globalmente o token para todas as rotas
      if (config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  });

  return api;
}

export const api = setup();
