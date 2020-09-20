import React from 'react';
import { useTheme } from 'styled-components';
import { TouchableProps, Touchable } from './Touchable';
import { Text } from '../typography/Text';

export const PrimaryButton = (
  props: TouchableProps & { text: string; stretch?: boolean },
) => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="primary">
      <Text
        textAlign="center"
        style={{ width: props.stretch ? '100%' : 'auto' }}
        color={
          props.variant === 'outlined' ? theme.colors.main : theme.colors.white
        }
        fontSize={
          props.btnSize && props.btnSize === 'lg'
            ? theme.fontSizes[2]
            : theme.fontSizes[1]
        }>
        {props.text}
      </Text>
    </Touchable>
  );
};

export const DangerButton = (props: TouchableProps & { text: string }) => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="danger">
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

export const DisabledButton = (props: TouchableProps & { text: string }) => {
  const theme = useTheme();

  return (
    <Touchable {...props} color="muted">
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
