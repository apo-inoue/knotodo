import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../4pages';
import { useTheme } from 'styled-components';
import { TabIcon } from '../1standalone/TabIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PrimaryButton } from '../../ui/button/StyledButtons';

export const TabNavigation = () => {
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const route = useRoute();

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
            <TabIcon name="calendar-clock" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon name="calendar-today" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotToday"
        component={NotTodayTodos}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon name="calendar-blank" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
