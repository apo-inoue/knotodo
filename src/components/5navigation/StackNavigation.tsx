import React, { FC, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoDetails, NewTodo, EditTodo } from '../4pages';
import { useTheme } from 'styled-components';
import { HeaderIconLeft, HeaderIconsRight, HeaderTitle } from '../1standalone';
import { Text } from '../../ui';
import { RouteProp } from '@react-navigation/native';
import { STACK_ROUTE_NAMES } from './type';
import { ModalNavigation } from './ModalNavigation';

export const StackNavigation: FC = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const sortModalToggler = () => {
    setSortModalVisible(!isSortModalVisible);
  };
  const filterModalToggler = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };
  const renderItem = () => (
    <ModalNavigation
      isSortModalVisible={isSortModalVisible}
      sortModalToggler={sortModalToggler}
      isFilterModalVisible={isFilterModalVisible}
      filterModalToggler={filterModalToggler}
    />
  );

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
        name={STACK_ROUTE_NAMES.Root}
        component={renderItem}
        options={({
          route,
        }: {
          // eslint-disable-next-line @typescript-eslint/ban-types
          route: RouteProp<Record<string, object | undefined>, 'Root'>;
        }) => ({
          headerRight: () => (
            <HeaderIconsRight
              onPressSort={sortModalToggler}
              onPressFilter={filterModalToggler}
            />
          ),
          headerTitle: () => <HeaderTitle route={route} />,
          headerLeft: () => <HeaderIconLeft />,
        })}
      />
      <Stack.Screen
        name={STACK_ROUTE_NAMES.新規作成}
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
        name={STACK_ROUTE_NAMES.編集}
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
        name={STACK_ROUTE_NAMES.詳細}
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
    </Stack.Navigator>
  );
};
