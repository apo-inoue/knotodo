import React from 'react';
import { useAuthContext } from '../../containers/auth/useCtx';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';

export const LogIn = () => {
  const { handleLogIn } = useAuthContext();

  return (
    <Container>
      <LogInCollection onLogIn={handleLogIn} />
    </Container>
  );
};
