import React, { FC } from 'react';
import { CustomTextInputProps } from './TextInput';
import { Text } from '../typography/Text';
import { useTheme } from 'styled-components';
import { OutlinedTextInput, UnderlinedTextInput } from './StyledTextInput';
import { Box } from '../layout/Box';

type TextForm = {
  label?: string;
  err: null | string;
} & CustomTextInputProps;

export const OutlinedTextForm: FC<TextForm> = props => {
  const theme = useTheme();

  return (
    <>
      <Text>{props.label}</Text>
      <OutlinedTextInput {...props} />
      {props.err && <Text color={theme.colors.danger}>{props.err}</Text>}
    </>
  );
};

export const UnderlinedTextForm: FC<TextForm> = ({ err, ...rest }) => {
  const theme = useTheme();

  return (
    <Box width="100%" flexDirection="column" justifyContent="center">
      <UnderlinedTextInput {...rest} />
      <Text color={theme.colors.danger}>{err}</Text>
    </Box>
  );
};
