import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Box } from '../layout/Box';
import { useTheme } from 'styled-components';
import { Text } from '../typography/Text';
import { Spacing } from '../layout/Spacing';

type RadioButton = {
  checked: boolean;
  text: string;
};

export const RadioButton: FC<RadioButton> = ({ checked, text }) => {
  const theme = useTheme();

  return (
    <Box my={1} alignItems="center" flexDirection="row">
      <Box mr={2}>
        {checked ? (
          <FontAwesome name="dot-circle-o" size={24} color={theme.colors.main} />
        ) : (
          <FontAwesome name="circle-o" size={24} color={theme.colors.blacks[5]} />
        )}
      </Box>
      <Text>{text}</Text>
    </Box>
  );
};
