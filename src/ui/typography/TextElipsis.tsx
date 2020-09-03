import { Text } from 'native-base';
import styled from 'styled-components/native';
import { typography, color, ColorProps, TypographyProps } from 'styled-system';
import { ReactNode } from 'react';
import { TextProps } from 'react-native';

type TextType = TypographyProps &
  ColorProps &
  Readonly<TextProps> &
  Readonly<{ children?: ReactNode }>;

export const TextEllipsis = styled.Text<TextType>`
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  ${typography}
  ${color}
`;
