import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ResetStyle } from './src/components/theme/ResetStyle';
import { CustomThemeProvider } from './src/components/theme/CustomThemeProvider';

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ResetStyle />
      <CustomThemeProvider>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </CustomThemeProvider>
    </>
  );
};

export default App;
