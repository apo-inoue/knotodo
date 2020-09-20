import styled from 'styled-components/native';
import { typography, color, ColorProps, TypographyProps } from 'styled-system';
import { ReactNode } from 'react';
import { TextProps } from 'react-native';

type Text = { span?: boolean; stretch?: boolean } & TypographyProps &
  ColorProps &
  Readonly<TextProps> &
  Readonly<{ children?: ReactNode }>;

export const Text = styled.Text<Text>`
  font-family: 'NotoSansJP_400Regular';
  ${props =>
    props.span && {
      fontSize: props.theme.fontSizes[2],
    }}

  ${props =>
    props.stretch && {
      width: '100%',
    }}

  ${typography}
  ${color}
`;
