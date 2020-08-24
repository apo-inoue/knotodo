import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { CustomThemeProvider } from './src/containers/theme/provider';
import { ComposedProviders } from './src/containers/ComposedProviders';
import { useAuthContext } from './src/containers/auth/useCtx';
import { LogIn } from './src/page';
import { Text } from './src/components/ui/Text';

const ApolloHandler = () => {
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
      <Text>hello</Text>
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
