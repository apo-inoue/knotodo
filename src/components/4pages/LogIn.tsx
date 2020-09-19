import React from 'react';
import { useAuthContext } from '../../containers/contexts/auth';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';

export const LogIn = () => {
  const { handleLogIn } = useAuthContext();

  return (
    <Container centerContent>
      <LogInCollection onLogIn={handleLogIn} />
    </Container>
  );
};
