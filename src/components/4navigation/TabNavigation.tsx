import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../3pages';
import { useTheme } from 'styled-components';
import { TabIcon } from '../1standalone/TabIcon';

export const TabNavigation = () => {
  const theme = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[4],
      }}>
      <Tab.Screen
        name="Today"
        component={TodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabIcon name="calendar" color={color} />,
        }}
      />
      <Tab.Screen
        name="NotToday"
        component={NotTodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabIcon name="calendar" color={color} />,
        }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabIcon name="calendar" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
