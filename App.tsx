import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { CustomThemeProvider } from './src/containers/theme/provider';
import { ComposedProviders } from './src/containers/ComposedProviders';
import { useAuthContext } from './src/containers/auth/useCtx';
import { LogIn } from './src/components/3pages';
import { Text } from './src/ui/typography/Text';
import {
  useFonts,
  NotoSansJP_100Thin,
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
  NotoSansJP_900Black,
} from '@expo-google-fonts/noto-sans-jp';
import { AppLoading } from 'expo';

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

  const [fontsLoaded] = useFonts({
    NotoSansJP_100Thin,
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
    NotoSansJP_900Black,
  });

  if (!token) {
    return <LogIn />;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
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
