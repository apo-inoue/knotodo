import React, { FC, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components/native';

const theme = {
  success: '#27a745',
  danger: '#dc3545',
  muted: '#f6f6f6',
  light: '#ff58c9',
  main: '#354171',
  dark: '#aa006a',
  white: '#fafafa',
  black: '#1f1f1f',
};

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useCustomTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
