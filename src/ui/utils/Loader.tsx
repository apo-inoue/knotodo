import React, { FC } from 'react';
import styled from 'styled-components/native';
import { flex } from 'styled-system';
import { ActivityIndicatorProps } from 'react-native';
import { Container } from '../layout/Container';

export const Loader = styled.ActivityIndicator<ActivityIndicatorProps>`
  display: flex;
  align-self: center;
  margin: 24px;
  ${flex}
`;

export const ScreenLoader: FC = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
