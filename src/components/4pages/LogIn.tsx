import React from 'react';
import { useAuthContext } from '../../containers/auth/useCtx';
import { Box, Text, Container, PrimaryButton } from '../../ui';
import { DisabledButton } from '../../ui/button/StyledButtons';
import { RoundButton } from '../../ui/button/RoundButton';

export const LogIn = () => {
  const { handleLogIn, handleLogOut } = useAuthContext();

  return (
    <Container>
      <Text fontSize={20} color="danger">
        こんにちは
      </Text>
      <Box mt={20} />
      <PrimaryButton onPress={handleLogIn} title="logIn" mt={120} />
      <PrimaryButton onPress={handleLogOut} title="logIn" mt={120} />
      {/* <DisabledButton onPress={logIn} title="logIn" mt={120} /> */}
    </Container>
  );
};
