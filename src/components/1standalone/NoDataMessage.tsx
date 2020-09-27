import React, { FC } from 'react';
import { Container, Text } from '../../ui';
import { useTheme } from 'styled-components';

export const NoDataMessage: FC = () => {
  const theme = useTheme();

  return (
    <Container centerContent>
      <Text color={theme.colors.blacks[7]}>todoがありません。</Text>
    </Container>
  );
};
