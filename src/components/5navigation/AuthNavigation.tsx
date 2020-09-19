import React from 'react';
import { Navigation } from './Navigation';
import { useAuthContext } from '../../containers/contexts/auth';
import { LogIn } from '../4pages';

export const AuthNavigation = () => {
  const {
    state: { token },
  } = useAuthContext();

  if (!token) {
    return <LogIn />;
  }

  return <Navigation />;
};
