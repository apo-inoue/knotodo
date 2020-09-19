import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from './theme';

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
