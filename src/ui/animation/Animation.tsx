import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { FlexboxProps } from 'styled-system';
import {
  space,
  layout,
  flex,
  border,
  position,
  BorderProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

export type AnimationProps = PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  Readonly<{ children?: ReactNode }>;

export const Animation = styled.View<AnimationProps>`
  flex-direction: row;
  min-width: 0;

  ${position}
  ${space}
  ${flex}
  ${border}
  ${layout}
`;
