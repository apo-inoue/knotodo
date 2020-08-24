import styled, { DefaultTheme, css } from 'styled-components/native';
import { border, layout, BorderProps, LayoutProps } from 'styled-system';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

type TextInput = { variant: 'outlined' | 'underlined' } & BorderProps &
  LayoutProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const TextInput = styled.TextInput<TextInput>`
  height: 40px;
  width: 100%;
  caret-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};

  ${props =>
    props.variant === 'outlined' &&
    css`
      border-width: 1;
    `}

  ${props =>
    props.variant === 'underlined' &&
    css`
      border-bottoms-width: 1;
    `}

  ${border};
  ${layout};
`;
