import React, { FC } from 'react';
import { Navigation } from './Navigation';
import { useAuthContext } from '../../containers/contexts/auth';
import { LogIn } from '../4pages';
import { NewUserWelcome } from '../4pages/NewUserWelcome';

export const AuthNavigation: FC = () => {
  const {
    state: {
      token,
      userInfo: { isNewUser },
    },
  } = useAuthContext();

  if (!token) {
    return <LogIn />;
  }

  if (isNewUser) {
    return <NewUserWelcome />;
  }

  return <Navigation />;
};
