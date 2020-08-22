import React from 'react';
import { useAuthContext } from '../containers/auth/useCtx';
import { Box, Text, Container } from '../components/ui';
import { PrimaryButton } from '../components/ui-group';
import { DisabledButton } from '../components/ui-group/StyledButtons';
import { RoundButton } from '../components/ui-group/RoundButton';

export const LogIn = () => {
  const { logIn } = useAuthContext();

  return (
    <Container>
      <Text fontSize={20} color="danger">
        こんにちは
      </Text>
      <RoundButton>hello</RoundButton>
      <Box mt={20} />
      <PrimaryButton onPress={logIn} title="logIn" mt={120} />
      {/* <DisabledButton onPress={logIn} title="logIn" mt={120} /> */}
    </Container>
  );
};
