import React from 'react';
import { DrawerActions } from '@react-navigation/native';
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
        name="menu"
        size={24}
        color={theme.colors.white}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
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
        onPress={() => navigation.navigate('Sort')}
      />
      <Box mr={3} />
      <MaterialCommunityIcons
        name="settings"
        size={24}
        color={theme.colors.white}
        onPress={() => navigation.navigate('Setting')}
      />
    </Box>
  );
};
