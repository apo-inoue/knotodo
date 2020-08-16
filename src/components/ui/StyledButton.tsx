import React from 'react';
import styled, { ThemeProps, DefaultTheme } from 'styled-components/native';
import {
  ColorProps,
  ColorStyleProps,
  ButtonStyleProps,
  TextStyleProps,
  variant,
} from 'styled-system';
import { ButtonProps, Button } from 'react-native';
import { ReactNode } from 'react';
import { useCustomTheme } from '../theme/CustomThemeProvider';

type ButtonType = ThemeProps<{ colors: { primary: string } }> &
  ColorStyleProps &
  ButtonStyleProps &
  TextStyleProps &
  ColorProps &
  Readonly<ButtonProps> &
  Readonly<{ children?: ReactNode }>;

export const StyledButton = (props: ButtonProps) => {
  const theme = useCustomTheme();

  return <Button color={theme.colors.primary} {...props} />;
};
