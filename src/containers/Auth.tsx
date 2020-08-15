import React, { FC, useState } from 'react';
import Auth0 from 'react-native-auth0';
import { createCtx } from '../helpers/hooks/createCtx';

const auth0 = new Auth0({
  domain: 'dev-28i2mygc.au.auth0.com',
  clientId: 'OZw0caLilg38KEnAX87dAgwWDSovaN1q',
});

type useAuthContext = {
  logIn: any;
  logOut: any;
};

export const [useAuthContext, AuthContextProvider] = createCtx<
  useAuthContext
>();

export const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState({ accessToken: null });
  const logIn = () => {
    return auth0.webAuth
      .authorize({ scope: 'openid profile email' })
      .then(credentials =>
        setAuthState({ accessToken: credentials.accessToken }),
      )
      .catch(error => console.log(error));
  };
  const logOut = () => {
    auth0.webAuth
      .clearSession({})
      .then(success => {
        Alert.alert('Logged out!');
        setState({ accessToken: null });
      })
      .catch(error => {
        console.log('Log out cancelled');
      });
  };
  const value = {
    logIn,
    logOut,
  };

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
