import { useMutation, useQuery, UseQueryResult } from 'react-query';
import { api } from '../services/api';

import { QueryEnum } from '../utils/defaults';

interface IUsuarioProps {
  id: number;
  nome: string;
  email?: string;
  senha?: string;
}

interface IUsuarioData {
  data: [
    {
      id: number;
      nome: string;
      email: string;
      senha: string;
    },
  ];
}

// Queries
export const useGetUsers = () => {
  const usuarios: UseQueryResult<IUsuarioData> = useQuery(QueryEnum.USUARIOS, () =>
    api.get('/usuario'),
  );

  return usuarios;
};

// Mutations
export const usePostUser = () => {
  return useMutation((data: IUsuarioProps) => api.post('/usuario', data));
};

export const usePatchUser = () => {
  return useMutation((data: IUsuarioProps) => api.patch(`/usuario/${data.id}`, data));
};

export const useDeleteUser = () => {
  return useMutation((id: number) => api.delete(`/usuario/${id}`));
};
