import React from 'react';
import { Container, Text } from '../../ui';
import { useTheme } from 'styled-components';

export const ErrorMessage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.danger}>unhandled error occur!!</Text>
    </Container>
  );
};
