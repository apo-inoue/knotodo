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
  ${border}
  ${shadow}
  ${space}
  ${layout}
  ${color}
`;

Card.defaultProps = {
  bg: 'white',
  borderRadius: 1,
};

/* shadow-opacity: 0.75;
  shadow-radius: 5;
  shadow-color: ${props => props.theme.colors.black[6]}; */
