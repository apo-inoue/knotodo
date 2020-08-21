import Auth0 from 'react-native-auth0';
import React, { FC, useReducer, useCallback } from 'react';
import { loginAuth0, signUpAuth0, logoutAuth0 } from './operations';
import { authReducer, initialState } from './reducer';
import { AuthContextProvider } from './useCtx';

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signUp = useCallback(() => {
    signUpAuth0;
    dispatch({ actionType: 'SIGNUP', payload: { isLoggedIn: true, userName: 'hoge' } });
  }, []);
  const logIn = useCallback(() => {
    loginAuth0;
    dispatch({ actionType: 'LOGIN', payload: { isLoggedIn: true, userName: 'hoge' } });
  }, []);
  const logOut = useCallback(() => {
    logoutAuth0;
    dispatch({ actionType: 'LOGOUT' });
  }, []);

  const value = {
    state,
    signUp,
    logIn,
    logOut,
  };

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
