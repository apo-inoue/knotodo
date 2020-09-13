import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Box } from '../layout/Box';
import { useTheme } from 'styled-components';
import { Text } from '../typography/Text';
import { Spacing } from '../layout/Spacing';
import { Touchable, TouchableProps } from '../button/Touchable';

type RadioButton = {
  checked: boolean;
  text: string;
  radioColor?: string;
} & TouchableProps;

export const RadioButton: FC<RadioButton> = props => {
  const theme = useTheme();

  return (
    <Touchable {...props}>
      <Box my={1} alignItems="center" flexDirection="row">
        <Box mr={2}>
          {props.checked ? (
            <FontAwesome
              name="dot-circle-o"
              size={24}
              color={props.radioColor ? props.radioColor : theme.colors.main}
            />
          ) : (
            <FontAwesome
              name="circle-o"
              size={24}
              color={theme.colors.blacks[5]}
            />
          )}
        </Box>
        <Text>{props.text}</Text>
      </Box>
    </Touchable>
  );
};
