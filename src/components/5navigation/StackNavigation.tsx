import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { TodoDetails, Setting, NewTodo, Sort } from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIconLeft, HeaderIconsRight, Logo } from '../1standalone';
import { TabNavigation } from './TabNavigation';
import { DrawerNavigation } from './DrawerNavigation';
import { Box, Text } from '../../ui';

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
          headerTitle: () => (
            <Box flexDirection="row" alignItems="center">
              <Box mr={2}>
                <Logo />
              </Box>
              <Text span color={theme.colors.white} fontWeight="bold">
                knoTodo
              </Text>
            </Box>
          ),
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
