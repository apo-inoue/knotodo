import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Box } from '../layout/Box';
import { Touchable, TouchableProps } from '../button/Touchable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type RadioButton = {
  checked: boolean;
  radioColor?: string;
} & TouchableProps;

export const RadioButton: FC<RadioButton> = props => {
  const theme = useTheme();

  return (
    <Touchable p={0} {...props}>
      <Box>
        {props.checked ? (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={24}
            color={props.radioColor ? props.radioColor : theme.colors.main}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={24}
            color={theme.colors.blacks[5]}
          />
        )}
      </Box>
    </Touchable>
  );
};
