import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Today } from '../page/Today';
import { NavigationContainer } from '@react-navigation/native';
import { LogIn } from '../page/LogIn';
import { useAuthContext } from '../containers/Auth';

const Stack = createStackNavigator();

const Navigation = () => {
  const { isLogIn } = useAuthContext();
  if (!isLogIn) return <LogIn />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Today" component={Today} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
