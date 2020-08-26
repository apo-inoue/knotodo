import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../components/3pages';
import { Notification } from '../components/3pages/Notification';
import { useTheme } from 'styled-components';
import NewTodo from '../components/3pages/NewTodo';
import { TodoDetails } from '../components/3pages/TodoDetails';

// ------tab------
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayTodos} />
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
        <Modal.Screen name="root" component={NewTodo} />
        <Modal.Screen name="root" component={TodoDetails} />
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
