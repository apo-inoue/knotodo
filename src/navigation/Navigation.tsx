import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LogIn, TodayTodos, NotTodayTodos, ArchiveTodos } from '../page';
import { useAuthContext } from '../containers/Auth';
import { useCustomTheme } from '../components/theme/CustomThemeProvider';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const theme = useCustomTheme();
  const { isLogIn } = useAuthContext();
  if (!isLogIn) return <LogIn />;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={TodayTodos} />
        <Tab.Screen name="Today" component={NotTodayTodos} />
        <Tab.Screen name="Today" component={ArchiveTodos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
