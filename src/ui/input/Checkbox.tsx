import React, { FC } from 'react';
import { Box } from '../layout/Box';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Touchable, TouchableProps } from '../button/Touchable';
import { useTheme } from 'styled-components';

type CheckBox = {
  checked: boolean;
  checkColor?: string;
} & TouchableProps;

export const CheckBox: FC<CheckBox> = props => {
  const theme = useTheme();

  return (
    <Touchable p={0} {...props}>
      <Box>
        {props.checked ? (
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={24}
            color={props.checkColor ? props.checkColor : theme.colors.main}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color={theme.colors.blacks[5]}
          />
        )}
      </Box>
    </Touchable>
  );
};
