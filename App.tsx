import React from 'react';
import { CustomThemeProvider } from './src/containers/theme/provider';
import { ComposedProviders } from './src/containers/ComposedProviders';
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
import { AuthNavigation } from './src/components/4navigation/AuthNavigation';

const App = () => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_100Thin,
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
    NotoSansJP_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ComposedProviders>
      <CustomThemeProvider>
        <AuthNavigation />
      </CustomThemeProvider>
    </ComposedProviders>
  );
};

export default App;
