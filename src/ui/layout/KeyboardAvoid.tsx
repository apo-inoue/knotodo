import { ViewProps } from 'react-native';
import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  BorderProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  ColorProps,
} from 'styled-system';

type View = {
  textAlign?: 'center' | 'left';
} & PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  ColorProps &
  Readonly<{ children?: ReactNode }>;

export const KeyboardAvoid = styled.KeyboardAvoidingView<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  display: flex;

  ${position}
  ${space}
  ${flexbox}
  ${border}
  ${layout}
  ${color}

  ${props =>
    props.textAlign === 'center' && {
      textAlign: 'center',
    }}
`;
