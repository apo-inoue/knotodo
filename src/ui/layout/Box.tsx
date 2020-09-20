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

type View = {
  textAlign?: 'center' | 'left';
} & PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  Readonly<{ children?: ReactNode }>;

export const Box = styled.View<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${position}
  ${space}
  ${flex}
  ${border}
  ${layout}

  ${props =>
    props.textAlign === 'center' && {
      textAlign: 'center',
    }}
`;
