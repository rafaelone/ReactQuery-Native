import {TouchableOpacity} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #181b23;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const UserListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
`;

export const UserContainer = styled(TouchableOpacity)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: #f4ede8;
`;
