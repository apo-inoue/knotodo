import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './StackNavigation';
import { useTheme } from 'styled-components';
import { Box } from '../../ui/layout/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

export const Navigation = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        width="100%"
        height={Constants.statusBarHeight}
        style={{ backgroundColor: theme.colors.dark }}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={theme.colors.dark}
        />
      </Box>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};
