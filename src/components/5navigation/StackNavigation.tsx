import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoDetails, Setting, NewTodo, Sort } from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIconLeft, HeaderIconsRight } from '../1standalone';
import { TabNavigation } from './TabNavigation';
import { DrawerNavigation } from './DrawerNavigation';

export const StackNavigation = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.main,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{
          headerRight: () => <HeaderIconsRight />,
          headerTitle: 'KnoTodo',
          headerLeft: () => <HeaderIconLeft />,
        }}
      />
      <Stack.Screen
        name="NewTodo"
        component={NewTodo}
        options={{
          headerTitle: '新規',
        }}
      />
      <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={{
          headerTitle: '詳細',
        }}
      />
      <Stack.Screen
        name="Sort"
        component={Sort}
        options={{
          headerTitle: '並べ替え',
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '設定',
        }}
      />
    </Stack.Navigator>
  );
};
