import styled from 'styled-components/native';
import { space, layout, typography, color, ColorProps } from 'styled-system';
import { ButtonProps } from 'react-native';
import { ReactNode } from 'react';

type Button = ColorProps &
  Readonly<ButtonProps> &
  Readonly<{ children?: ReactNode }>;

export const Button = styled.Button<Button>`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;
