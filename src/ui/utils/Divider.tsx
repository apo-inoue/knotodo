import React from 'react';
import styled from 'styled-components/native';
import { border, BorderProps } from 'styled-system';
import { ViewProps } from 'react-native';

type DividerProps = {
  dashed?: boolean;
} & BorderProps &
  ViewProps;

export const Divider = styled.View<DividerProps>`
  margin-top: 11.5px;
  margin-bottom: 11.5px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.blacks[5]};

  ${props => props.dashed && { borderStyle: 'dashed' }};

  ${border};
`;
