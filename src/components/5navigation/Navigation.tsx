import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './StackNavigation';
import { useTheme } from 'styled-components';
import { Box } from '../../ui';
import Constants from 'expo-constants';

export const Navigation: FC = () => {
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
