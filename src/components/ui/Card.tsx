import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
  border,
  space,
  layout,
  color,
  shadow,
  ShadowProps,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

type View = BorderProps &
  ShadowProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Card = styled.View<View>`
  border-radius: 4;
  box-shadow: '0 2px 4px rgba(0, 0, 0, 0.125)';
  ${border}
  ${shadow}
  ${space}
  ${layout}
  ${color}
`;

Card.defaultProps = {
  bg: 'white',
};
