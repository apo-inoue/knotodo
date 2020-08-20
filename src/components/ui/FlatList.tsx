import styled, { DefaultTheme } from 'styled-components/native';
import {
  space,
  flex,
  border,
  SpaceProps,
  FlexProps,
  BorderProps,
} from 'styled-system';
import { FlatList, FlatListProps } from 'react-native';

type FlatListType = SpaceProps &
  FlexProps &
  BorderProps &
  FlatListProps<any> &
  DefaultTheme;

const StyledFlatList = styled(FlatList)<FlatListType>`
  padding: 8;
  border: 1px solid ${props => props.theme.colors.blacks[4]};
  display: inline-flex;
  align-items: center;
  ${space}
  ${flex}
  ${border}
`;

export { StyledFlatList as FlatList };
