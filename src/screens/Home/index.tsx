import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useRefreshByUser} from '../../hooks/useRefreshByUser';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';

import {useUsers} from '../../services/hooks/useUser';

import {Container, UserContainer, UserListTitle, UserName} from './styles';

export type User = {
  id: string;
  name: string;
};

export function Home() {
  const {data, refetch} = useUsers();

  const {isRefetchingByUser, refetchByUser} = useRefreshByUser(refetch);
  useRefreshOnFocus(refetch);

  return (
    <Container>
      <FlatList
        data={data?.users}
        keyExtractor={item => item.id}
        ListHeaderComponent={<UserListTitle>Usuários</UserListTitle>}
        renderItem={({item: user}) => (
          <UserContainer>
            <UserName>{user.name}</UserName>
          </UserContainer>
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
      />
    </Container>
  );
}
