import { setToken, getToken, deleteToken } from './utils';
import * as AuthSession from 'expo-auth-session';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-28i2mygc.au.auth0.com',
  clientId: 'OZw0caLilg38KEnAX87dAgwWDSovaN1q',
});

export const loginNameless = async () => {
  const token = await getToken();
  const isUserLoggedIn = token !== null ? true : false;
  const userName = token !== null ? await auth0.auth.userInfo({ token }) : null;

  return {
    userName,
  };
};

export const loginWithGoogle = async () => {
  const token = await getToken();
  const isUserLoggedIn = token !== null ? true : false;
  const userName = token !== null ? await auth0.auth.userInfo({ token }) : null;
  const redirectUrl = await AuthSession.getRedirectUrl();

  return {
    userName,
  };
};

export const loginAuth0 = async (username: string, password: string) => {
  const response = await auth0.auth.passwordRealm({
    username: username,
    password: password,
    realm: 'Username-Password-Authentication',
    scope: 'openid profile email',
  });
  const token = await setToken(response.accessToken);
  const userInfo = await auth0.auth.userInfo({
    token: response.accessToken,
  });
};

export const logoutAuth0 = async () => {
  const token = await deleteToken();
};

export const signUpAuth0 = async (username: string, password: string) => {
  const response = await auth0.auth.createUser({
    email: username,
    password: password,
    connection: 'Username-Password-Authentication',
  });
};
