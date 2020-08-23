import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TodayTodos, NotTodayTodos, ArchiveTodos } from '../page';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={TodayTodos} />
        <Tab.Screen name="NotToday" component={NotTodayTodos} />
        <Tab.Screen name="Archive" component={ArchiveTodos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
