import React, { FC, useState } from 'react';
import Auth0 from 'react-native-auth0';
import { createCtx } from '../helpers/utils/createCtx';

const auth0 = new Auth0({
  domain: 'dev-28i2mygc.au.auth0.com',
  clientId: 'OZw0caLilg38KEnAX87dAgwWDSovaN1q',
});

type useAuthContext = {
  logIn: () => void;
  logOut: () => void;
  authState: authState;
  isLogIn: boolean;
};

type authState = {
  accessToken: null | string;
};

export const [useAuthContext, AuthContextProvider] = createCtx<
  useAuthContext
>();

export const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState<authState>({
    accessToken: null,
  });
  const isLogIn = authState.accessToken != null;
  console.log(isLogIn, authState);
  const logIn = () => {
    auth0.webAuth
      .authorize({ scope: 'openid profile email' })
      .then((credentials: { accessToken: null | string }) =>
        setAuthState({ accessToken: credentials.accessToken }),
      )
      .catch((error: any) => console.log(error));
  };
  const logOut = () => {
    auth0.webAuth
      .clearSession(undefined)
      .then((success: boolean) => {
        console.log('logout');
        setAuthState({ accessToken: null });
      })
      .catch((error: any) => {
        console.log('Log out cancelled');
      });
  };
  const value = {
    authState,
    isLogIn,
    logIn,
    logOut,
  };

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
