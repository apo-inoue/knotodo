import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  border,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export type TouchableProps = LayoutProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  TouchableOpacityProps;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${border}
`;
