import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../4pages';
import { useTheme } from 'styled-components';
import { CustomIcon } from '../1standalone';
import { useNavigation, useRoute } from '@react-navigation/native';

export const TabNavigation = () => {
  const theme = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Today"
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[4],
      }}>
      <Tab.Screen
        name="Archive"
        component={ArchiveTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <CustomIcon name="calendar-clock" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <CustomIcon name="calendar-today" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotToday"
        component={NotTodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <CustomIcon name="calendar-blank" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
