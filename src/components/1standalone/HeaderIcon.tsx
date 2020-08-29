import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export const HeaderIcon = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box mr={2}>
      <FontAwesome
        onPress={() => navigation.navigate('Notification')}
        name="gear"
        size={24}
        color={theme.colors.main}
      />
    </Box>
  );
};
