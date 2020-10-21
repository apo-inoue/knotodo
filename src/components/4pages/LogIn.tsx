import React, { FC, useEffect } from 'react';
import { useAuthCtx } from '../../containers/contexts/auth';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';

export const LogIn: FC = () => {
  const { handleLogIn, handleSession } = useAuthCtx();

  useEffect(() => {
    handleSession(false);
  }, [handleSession]);

  return (
    <Container centerContent>
      <LogInCollection onLogIn={handleLogIn} />
    </Container>
  );
};
