import React, { useCallback } from 'react';
import { Container, Text } from '../../ui';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Linking } from 'react-native';

export const Setting = () => {
  const theme = useTheme();
  const githubURL = 'https://github.com/apo-inoue/knotodo';
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(githubURL);

    if (supported) {
      await Linking.openURL(githubURL);
    }
  }, [githubURL]);

  return (
    <Container>
      <Text>...⚠︎開発中...</Text>
      <Text onPress={handlePress} color={theme.colors.main}>
        <FontAwesome name="github-square" size={24} color={theme.colors.main} />
        github/knoTodo
      </Text>
    </Container>
  );
};
