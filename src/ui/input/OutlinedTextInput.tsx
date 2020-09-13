import React, { FC } from 'react';
import { TextInput, CustomTextInputProps } from './TextInput';
import { useTheme } from 'styled-components';

export const OutlinedTextInput: FC<CustomTextInputProps> = props => {
  const theme = useTheme();

  return (
    <TextInput
      variant="outlined"
      borderTopLeftRadius="4px"
      borderTopRightRadius="4px"
      borderBottomRightRadius="4px"
      borderBottomLeftRadius="4px"
      selectionColor={theme.colors.main}
      {...props}
    />
  );
};
