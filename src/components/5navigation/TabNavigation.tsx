import React, { FC } from 'react';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../4pages';
import { useTheme } from 'styled-components';
import { TabIcon } from '../1standalone';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TAB_ROUTE_NAMES } from './type';

export const TabNavigation: FC = () => {
  const theme = useTheme();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={TAB_ROUTE_NAMES.今日}
      barStyle={{ backgroundColor: theme.colors.main }}>
      <Tab.Screen
        name={TAB_ROUTE_NAMES.過去}
        component={ArchiveTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName={TAB_ROUTE_NAMES.過去} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTE_NAMES.今日}
        component={TodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName={TAB_ROUTE_NAMES.今日} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTE_NAMES.未来}
        component={NotTodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName={TAB_ROUTE_NAMES.未来} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
