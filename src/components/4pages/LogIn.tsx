import React from 'react';
import { useAuthContext } from '../../containers/auth/useCtx';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';
import { useTheme } from 'styled-components';

export const LogIn = () => {
  const { handleLogIn } = useAuthContext();
  const theme = useTheme();

  return (
    <Container centerContent>
      <LogInCollection onLogIn={handleLogIn} />
    </Container>
  );
};
