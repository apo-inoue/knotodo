import styled from 'styled-components/native';
import { PickerProps } from 'react-native';
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

export type CustomPickerProps = LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  PickerProps;

const Picker = styled.Picker<CustomPickerProps>`
  width: 100%;
  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;

Picker.defaultProps = {
  itemStyle: { fontSize: 16, flex: 1 },
};

export { Picker };
