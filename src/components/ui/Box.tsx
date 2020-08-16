import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
  space,
  layout,
  color,
  position,
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

type View = PositionProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Box = styled.View<View>`
  box-sizing: border-box;
  min-width: 0;
  ${position}
  ${space}
  ${layout}
  ${color}
`;
