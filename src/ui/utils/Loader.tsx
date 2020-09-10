import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import { flex, FlexProps } from 'styled-system';
import { ActivityIndicatorProps } from 'react-native';
import { Container } from '../layout/Container';

type ActivityIndicator = FlexProps & ActivityIndicatorProps & DefaultTheme;

export const Loader = styled.ActivityIndicator<ActivityIndicatorProps>`
  display: flex;
  align-self: center;
  ${flex}
`;

export const ScreenLoader = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
