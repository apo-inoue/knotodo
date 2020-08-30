import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './StackNavigation';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
