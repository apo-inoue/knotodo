import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
