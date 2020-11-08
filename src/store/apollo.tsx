import React, { FC, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { useAuthCtx } from '../containers/contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { persistCache } from 'apollo3-cache-persist';
import { errorLink, retryLink } from './apolloLinks';

export const CustomApolloProvider: FC = ({ children }) => {
  const {
    state: { token },
  } = useAuthCtx();

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            merge: false,
          },
          categories: {
            merge: false,
          },
        },
      },
    },
  });
  useEffect(() => {
    const persistCacheAsync = async () => {
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
    };
    persistCacheAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const httpLink = new HttpLink({
    uri: 'https://right-goldfish-91.hasura.app/v1/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const client = new ApolloClient({
    cache,
    link: from([retryLink, errorLink, httpLink]),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
