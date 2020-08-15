import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CustomThemeProvider } from './src/components/theme/CustomThemeProvider';
import { AuthProvider } from './src/containers/Auth';

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://right-goldfish-91.hasura.app/v1/graphql',
});

const App = () => {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </CustomThemeProvider>
    </AuthProvider>
  );
};

export default App;
