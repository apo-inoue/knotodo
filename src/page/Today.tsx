import React from 'react';
import { Container, Button } from '../components/ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../components/theme/CustomThemeProvider';

export const Today = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  return (
    <Container>
      <Button
        onPress={() => navigation.goBack()}
        title="GoHome"
        color={theme.main}
      />
    </Container>
  );
};
