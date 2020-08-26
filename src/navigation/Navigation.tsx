import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../components/4pages';
import { Notification } from '../components/4pages/Notification';
import { useTheme } from 'styled-components';
import { Text } from '../ui';

// ------stack------
const Stack = createStackNavigator();

const TodayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today"
        component={TodayTodos}
        options={{
          title: '今日のTODO',
        }}
      />
    </Stack.Navigator>
  );
};

// ------tab------
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayStack} />
      <Tab.Screen name="NotToday" component={NotTodayTodos} />
      <Tab.Screen name="Archive" component={ArchiveTodos} />
    </Tab.Navigator>
  );
};

// ------drawer------
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        // navigationOptions={{ drawerLabel: null }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        // navigationOptions={{ drawerLabel: null }}
      />
    </Drawer.Navigator>
  );
};

// ------stack------
const Modal = createStackNavigator();

const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Modal.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
          headerTintColor: theme.colors.main,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Modal.Screen name="root" component={DrawerNavigation} />
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
