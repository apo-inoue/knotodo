import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { TouchableProps, Touchable } from './Touchable';
import { Text } from '../typography/Text';

export const PrimaryButton: FC<
  TouchableProps & { text: string; stretch?: boolean }
> = props => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="primary" m="1px">
      <Text
        textAlign="center"
        stretch={props.stretch}
        color={
          props.variant === 'outlined' ? theme.colors.main : theme.colors.white
        }>
        {props.text}
      </Text>
    </Touchable>
  );
};

export const DangerButton: FC<TouchableProps & { text: string }> = props => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="danger" m="1px">
      <Text
        color={
          props.variant === 'contained'
            ? theme.colors.white
            : theme.colors.danger
        }>
        {props.text}
      </Text>
    </Touchable>
  );
};

export const DisabledButton: FC<TouchableProps & { text: string }> = props => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="muted" m="1px">
      <Text
        color={
          props.variant === 'contained'
            ? theme.colors.white
            : theme.colors.muted
        }>
        {props.text}
      </Text>
    </Touchable>
  );
};
