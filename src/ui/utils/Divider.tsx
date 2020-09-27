import styled from 'styled-components/native';
import { border, BorderProps } from 'styled-system';
import { ViewProps, StyleSheet } from 'react-native';

type DividerProps = {
  dashed?: boolean;
  width?: number | string;
} & BorderProps &
  ViewProps;

export const Divider = styled.View<DividerProps>`
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${props => props.theme.colors.blacks[5]};
  ${props => props.dashed && { borderStyle: 'dashed' }};
  ${border};
  width: ${props => props.width || '100%'};
`;
