import React, { FC } from 'react';
import { TextInput, CustomTextInputProps } from './TextInput';

export const OutlinedTextInput: FC<CustomTextInputProps> = props => {
  return (
    <TextInput
      variant="outlined"
      borderTopLeftRadius="4px"
      borderTopRightRadius="4px"
      borderBottomRightRadius="4px"
      borderBottomLeftRadius="4px"
      {...props}
    />
  );
};
