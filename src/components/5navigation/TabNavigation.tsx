import React, { FC } from 'react';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../4pages';
import { useTheme } from 'styled-components';
import { TabIcon } from '../1standalone';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export const TabNavigation: FC = () => {
  const theme = useTheme();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Today"
      barStyle={{ backgroundColor: theme.colors.main }}>
      <Tab.Screen
        name="Archive"
        component={ArchiveTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName="archive" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName="today" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotToday"
        component={NotTodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon tabName="notToday" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
