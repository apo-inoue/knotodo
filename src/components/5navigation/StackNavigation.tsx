import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoDetails, Category, NewTodo, Sort, EditTodo } from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIconLeft, HeaderIconsRight, Logo } from '../1standalone';
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
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              knoTodo
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
      <Stack.Screen
        name="EditTodo"
        component={EditTodo}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              編集
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
      <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              詳細
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
      <Stack.Screen
        name="Sort"
        component={Sort}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              並べ替え
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              設定
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
    </Stack.Navigator>
  );
};
