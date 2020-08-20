import styled, { DefaultTheme } from 'styled-components/native';
import {
  space,
  flex,
  border,
  SpaceProps,
  FlexProps,
  BorderProps,
} from 'styled-system';
import { ScrollViewProps } from 'react-native';

type ScrollView = SpaceProps &
  FlexProps &
  BorderProps &
  ScrollViewProps &
  DefaultTheme;

export const ScrollView = styled.ScrollView<ScrollView>`
  padding: 8;
  border: 1px solid ${props => props.theme.colors.blacks[4]};
  display: inline-flex;
  align-items: center;
  ${space}
  ${flex}
  ${border}
`;
