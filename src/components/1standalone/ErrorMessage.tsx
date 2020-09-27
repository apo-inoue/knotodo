import React, { FC } from 'react';
import { Container, Text } from '../../ui';
import { useTheme } from 'styled-components';

export const ErrorMessage: FC = () => {
  const theme = useTheme();

  return (
    <Container centerContent>
      <Text color={theme.colors.danger}>エラーが発生しました。</Text>
    </Container>
  );
};
