import styled from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';
import { ButtonProps } from 'react-native';

export type ButtonType = SpaceProps & Readonly<ButtonProps>;

export const ButtonBase = styled.Button<ButtonType>`
  ${space}
`;
