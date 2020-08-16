// react-nativeをStyledComponentsで拡張したもの
// そのままでは使えないもの

import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  border,
  layout,
  flexbox,
  flex,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export type TouchableType = LayoutProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  Readonly<TouchableOpacityProps>;

export const Touchable = styled.TouchableOpacity<TouchableType>`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${border}
`;
