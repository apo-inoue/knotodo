import styled, { DefaultTheme } from 'styled-components/native';
import { typography, color, ColorProps, TypographyProps } from 'styled-system';
import { ReactNode } from 'react';
import { TextProps } from 'react-native';

type Text = TypographyProps &
  ColorProps &
  Readonly<TextProps> &
  Readonly<{ children?: string }> &
  DefaultTheme;

export const Text = styled.Text`
  ${typography}
  ${color}
`;
