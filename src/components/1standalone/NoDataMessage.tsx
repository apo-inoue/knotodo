import React, { FC } from 'react';
import { Container, Text } from '../../ui';
import { useTheme } from 'styled-components';

export const NoDataMessage: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.blacks[3]}>unhandled error occur!!</Text>
    </Container>
  );
};
