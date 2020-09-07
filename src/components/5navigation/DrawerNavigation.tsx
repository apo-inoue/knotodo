import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../4pages';
import { useTheme } from 'styled-components';
import { TabIcon } from '../1standalone/TabIcon';
import { Color } from '../3collection/Color';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';

export const DrawerNavigation = () => {
  const theme = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[4],
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <TabIcon name="calendar-clock" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Color"
        component={Color}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <TabIcon name="calendar-today" color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
