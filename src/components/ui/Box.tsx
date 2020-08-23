import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { FlexboxProps } from 'styled-system';
import {
  space,
  layout,
  flex,
  color,
  border,
  position,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

type View = PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Box = styled.View<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${position}
  ${space}
  ${flex}
  ${border}
  ${layout}
`;
