import { useMutation } from 'react-query';
import { api } from '../services/api';

interface ILoginProps {
  email: string;
  senha: string;
}

// Mutations
export const useAuthentication = () => {
  return useMutation((data: ILoginProps) => api.post('/auth', data));
};
