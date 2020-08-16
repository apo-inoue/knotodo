import React from 'react';
import { useAuthContext } from '../containers/Auth';
import { Button, Box, Text, Container } from '../components/ui';
import { StyledButton } from '../components/ui/StyledButton';

export const LogIn = () => {
  const { logIn } = useAuthContext();

  return (
    <Container>
      <Text fontSize={20} color="danger">
        こんにちは
      </Text>
      <Box mt={20} color="main" bg="primary" />
      <StyledButton onPress={logIn} title="logIn" />
    </Container>
  );
};
