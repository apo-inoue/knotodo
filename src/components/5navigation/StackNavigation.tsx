import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoDetails, Setting, NewTodo } from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIcon } from '../1standalone';
import { TabNavigation } from './TabNavigation';

export const StackNavigation = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTintColor: theme.colors.main,
        headerTitle: 'KnoTodo',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <HeaderIcon />,
      }}>
      <Stack.Screen name="Root" component={TabNavigation} />
      <Stack.Screen name="NewTodo" component={NewTodo} />
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
