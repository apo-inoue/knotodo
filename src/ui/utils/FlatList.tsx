import { ComponentType } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  border,
  layout,
  flexbox,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export type CustomFlatListProps = LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps;

const CustomFlatList = (styled(FlatList)`
  width: 100%;
  ${layout}
  ${flexbox}
  ${space}
  ${border}
` as ComponentType) as new <T>() => FlatList<T>;

export { CustomFlatList as FlatList };
