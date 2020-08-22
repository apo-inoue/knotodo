import React, { FC, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { AuthContextProvider } from './useCtx';
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';
import jwtDecoder from 'jwt-decode';
import queryString from 'query-string';
import {
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  AUTH_NAMESPACE,
  ID_TOKEN_KEY,
  NONCE_KEY,
} from '../../../config';
import * as AuthSession from 'expo-auth-session';

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const generateNonce = async () => {
    console.log(AuthSession.getRedirectUrl());
    const randomNum: Uint8Array = await Random.getRandomBytesAsync(16);
    const randomNumArray = Array.from(randomNum);
    const nonce = String.fromCharCode.apply(null, randomNumArray);
    await SecureStore.setItemAsync(NONCE_KEY, nonce);
    return nonce;
  };

  const handleLogIn = async () => {
    const nonce = await generateNonce();
    AuthSession.startAsync({
      authUrl:
        `${AUTH_DOMAIN}/authorize?` +
        queryString.stringify({
          client_id: AUTH_CLIENT_ID,
          response_type: 'id_token',
          scope: 'openid profile email',
          redirect_uri: AuthSession.getRedirectUrl(),
          nonce,
        }),
    }).then((result: any) => {
      if (result.type === 'success') {
        decodeToken(result.params.id_token);
      } else if (result.params && result.params.error) {
        console.log(result.params.error_description || 'Something went wrong while logging in.');
      }
    });
  };

  const decodeToken = (token: string) => {
    const decodedToken: any = jwtDecoder(token);
    const { nonce, sub, name, exp } = decodedToken;

    SecureStore.getItemAsync(NONCE_KEY).then(storedNonce => {
      if (nonce == storedNonce) {
        SecureStore.setItemAsync(
          ID_TOKEN_KEY,
          JSON.stringify({
            id: sub,
            name,
            exp,
            token,
          }),
        ).then(() => handleSession(decodedToken[AUTH_NAMESPACE].isNewUser));
      } else {
        console.log('error');
        return;
      }
    });
  };

  const handleSession = (isNewUser = false) => {
    SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
      if (session) {
        const sessionObj = JSON.parse(session);
        const { exp, token, id, name } = sessionObj;

        if (exp > Math.floor(new Date().getTime() / 1000)) {
          dispatch({ actionType: 'LOGIN', payload: { token, userInfo: { id, name, isNewUser } } });
        } else {
          dispatch({ actionType: 'LOGOUT' });
        }
      }
    });
  };

  const handleLogOut = () => {
    SecureStore.deleteItemAsync(ID_TOKEN_KEY);
    dispatch({ actionType: 'LOGOUT' });
  };

  const value = {
    state,
    handleLogIn,
    handleLogOut,
  };

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
