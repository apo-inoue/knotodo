import React, { FC } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import { useAuthContext } from '../containers/contexts/auth';

export const CustomApolloProvider: FC = ({ children }) => {
  const {
    state: { token },
  } = useAuthContext();
  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            todos: {
              merge: false,
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: 'https://right-goldfish-91.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
