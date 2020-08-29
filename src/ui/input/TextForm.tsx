import React, { FC } from 'react';
import { TextInput, CustomTextInputProps } from './TextInput';
import { Text } from '../typography/Text';
import { useTheme } from 'styled-components';
import { OutlinedTextInput } from './OutlinedTextInput';

type TextForm = {
  label: string;
  error: null | string;
} & CustomTextInputProps;

export const TextForm: FC<TextForm> = props => {
  const theme = useTheme();

  return (
    <>
      <Text>{props.label}</Text>
      <OutlinedTextInput {...props} />
      {props.error && <Text color={theme.colors.danger}>{props.error}</Text>}
    </>
  );
};
