import { FontAwesome } from '@expo/vector-icons';

import React, { FC } from 'react';
import { Box } from '..';

type RadioButton = {
  checked: boolean;
};

export const RadioButton: FC<RadioButton> = ({ checked }) => {
  return (
    <Box>
      {checked ? (
        <FontAwesome name="circle-o" size={24} color="black" />
      ) : (
        <FontAwesome name="dot-circle-o" size={24} color="black" />
      )}
    </Box>
  );
};
