import React, { FC, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components/native';
import { theme } from './theme';

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useCustomTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
