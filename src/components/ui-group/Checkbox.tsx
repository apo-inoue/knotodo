import styled from 'styled-components/native';
import { CheckBoxProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Box } from '../ui';

type CheckBox = {
  checked: boolean;
};

export const CheckBox: FC<CheckBox> = ({ checked }) => {
  return (
    <Box>
      {checked ? (
        <FontAwesome name="check-circle-o" size={24} color="black" />
      ) : (
        <FontAwesome name="circle-o" size={24} color="black" />
      )}
    </Box>
  );
};