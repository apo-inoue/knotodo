import styled, { DefaultTheme } from 'styled-components/native';
import { color, ColorProps } from 'styled-system';
import { StatusBarProps } from 'react-native';

type StatusBar = ColorProps & StatusBarProps & DefaultTheme;

export const StatusBar = styled.StatusBar<StatusBar>`
  background-color: ${props => props.theme.colors.primary};
  ${color}
`;
