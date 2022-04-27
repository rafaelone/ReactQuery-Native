import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {Home} from '../screens/Home';
import {NewUser} from '../screens/NewUser';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#181B23',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          tabBarStyle: {
            backgroundColor: '#181B23',
          },

          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon size={size} color={color} name="home" />
            ),
          }}
        />
        <Tab.Screen
          name="New User"
          component={NewUser}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon size={size} color={color} name="user" />
            ),
            tabBarLabel: 'Novo Usuário',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
