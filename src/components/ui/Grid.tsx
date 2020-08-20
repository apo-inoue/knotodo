import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { FlexboxProps } from 'styled-system';
import {
  space,
  layout,
  flex,
  grid,
  color,
  border,
  position,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  GridProps,
  PositionProps,
} from 'styled-system';

type View = PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  GridProps &
  ColorProps &
  FlexboxProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Grid = styled.View<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${position}
  ${space}
  ${flex}
  ${grid}
  ${border}
  ${layout}
  ${color}
`;
