import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { CustomThemeProvider } from './src/containers/theme/provider';
import { ComposedProviders } from './src/containers/ComposedProviders';
import { useAuthContext } from './src/containers/auth/useCtx';
import { LogIn } from './src/page';

// Create the client as outlined in the setup guide

const ApolloHandler = () => {
  const {
    state: { token },
  } = useAuthContext();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://hasura.io/learn/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });

  if (!token) {
    <LogIn />;
  }
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

const App = () => {
  return (
    <ComposedProviders>
      <CustomThemeProvider>
        <ApolloHandler />
      </CustomThemeProvider>
    </ComposedProviders>
  );
};

export default App;
