import React from 'react';
import { Navigation } from './Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { useAuthContext } from '../../containers/auth/useCtx';
import { LogIn } from '../3pages';

export const AuthNavigation = () => {
  const {
    state: { token },
  } = useAuthContext();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://right-goldfish-91.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });

  if (!token) {
    return <LogIn />;
  }

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};
