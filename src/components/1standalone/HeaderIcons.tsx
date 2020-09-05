import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export const HeaderIconLeft = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box ml={3}>
      <MaterialCommunityIcons
        name="medal"
        size={24}
        color={theme.colors.white}
      />
    </Box>
  );
};

export const HeaderIconsRight = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box flexDirection="row" mr={3}>
      <MaterialCommunityIcons
        name="sort"
        size={24}
        color={theme.colors.white}
        onPress={() => navigation.navigate('Setting')}
      />
      <Box mr={3} />
      <MaterialCommunityIcons
        name="settings"
        size={24}
        color={theme.colors.white}
        onPress={() => navigation.navigate('Sort')}
      />
    </Box>
  );
};
