import { flexbox, space, FlexboxProps, SpaceProps } from 'styled-system';
import styled from 'styled-components/native';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

type View = SpaceProps &
  FlexboxProps &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Flex = styled.View<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${flexbox}
  ${space}
`;
