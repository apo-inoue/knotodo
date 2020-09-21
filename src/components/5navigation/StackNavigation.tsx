import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TodoDetails,
  CategoryFilter,
  NewTodo,
  TodosSort,
  EditTodo,
} from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIconLeft, HeaderIconsRight, HeaderTitle } from '../1standalone';
import { DrawerNavigation } from './DrawerNavigation';
import { Text } from '../../ui';
import { RouteProp } from '@react-navigation/native';

export const StackNavigation: FC = () => {
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
        options={({
          route,
        }: {
          // eslint-disable-next-line @typescript-eslint/ban-types
          route: RouteProp<Record<string, object | undefined>, 'Root'>;
        }) => ({
          headerRight: () => <HeaderIconsRight />,
          headerTitle: () => <HeaderTitle route={route} />,
          headerLeft: () => <HeaderIconLeft />,
        })}
      />
      <Stack.Screen
        name="新規作成"
        component={NewTodo}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              新規作成
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
      <Stack.Screen
        name="編集"
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
        name="詳細"
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
        name="並べ替え"
        component={TodosSort}
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
        name="フィルター"
        component={CategoryFilter}
        options={{
          headerTitle: () => (
            <Text span color={theme.colors.white} fontWeight="bold">
              フィルター
            </Text>
          ),
          headerBackTitle: 'knoTodo',
        }}
      />
    </Stack.Navigator>
  );
};
