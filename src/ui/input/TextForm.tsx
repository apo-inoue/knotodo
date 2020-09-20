import React, { FC } from 'react';
import { TextInput, CustomTextInputProps } from './TextInput';
import { Text } from '../typography/Text';
import { useTheme } from 'styled-components';
import { OutlinedTextInput, UnderlinedTextInput } from './OutlinedTextInput';
import { Box } from '../layout/Box';

type TextForm = {
  label?: string;
  error: null | string;
} & CustomTextInputProps;

export const OutlinedTextForm: FC<TextForm> = props => {
  const theme = useTheme();

  return (
    <>
      <Text>{props.label}</Text>
      <OutlinedTextInput {...props} />
      {props.error && <Text color={theme.colors.danger}>{props.error}</Text>}
    </>
  );
};

export const UnderlinedTextForm: FC<TextForm> = props => {
  const theme = useTheme();

  return (
    <Box width="100%" flexDirection="row" justifyContent="center">
      <UnderlinedTextInput {...props} />
      {props.error && <Text color={theme.colors.danger}>{props.error}</Text>}
    </Box>
  );
};
