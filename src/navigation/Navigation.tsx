import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Today } from '../page/Today';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Today" component={Today} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
