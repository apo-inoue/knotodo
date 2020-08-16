import styled from 'styled-components/native';
import {
  space,
  border,
  typography,
  SpaceProps,
  BorderProps,
} from 'styled-system';
import { ButtonProps } from 'react-native';

export type ButtonType = SpaceProps & Readonly<ButtonProps>;

export const Button = styled.Button<ButtonType>`
  ${space}
`;
