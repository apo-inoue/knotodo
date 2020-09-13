import React, { FC } from 'react';
import Constants from 'expo-constants';
import { Container } from '../../ui/layout/Container';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../../ui/layout/Box';

export const Layout: FC<{ centerContent?: boolean }> = ({
  children,
  centerContent,
}) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </SafeAreaView>
  );
};
