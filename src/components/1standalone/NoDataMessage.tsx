import React from 'react';
import { Container, Text } from '../../ui';
import { useTheme } from 'styled-components';

export const NoDataMessage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.blacks[3]}>unhandled error occur!!</Text>
    </Container>
  );
};
