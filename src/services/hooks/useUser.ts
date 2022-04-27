import {useQuery} from 'react-query';
import {api} from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
};

export async function getUsers(): Promise<GetUsersResponse> {
  const {data} = await api.get('/users');

  return {users: data};
}

export function useUsers() {
  //  options: UseQueryOptions
  return useQuery(['users'], () => getUsers(), {
    staleTime: 1000 * 60 * 10, //10 minutes
    // ...options,
  });
}
