import styled from 'styled-components/native';
import { typography, color, ColorProps, TypographyProps } from 'styled-system';
import { ReactNode } from 'react';
import { TextProps } from 'react-native';

type Text = { span?: boolean } & TypographyProps &
  ColorProps &
  Readonly<TextProps> &
  Readonly<{ children?: ReactNode }>;

export const Text = styled.Text<Text>`
  ${props =>
    props.span && {
      fontSize: props.theme.fontSizes[2],
    }}

  ${typography}
  ${color}
`;
