import React from 'react';
import { Button } from 'react-native';
import { ButtonType } from './ButtonBase';
import { useTheme } from 'styled-components';
import { Box } from '../layout/Box';

export const PrimaryButton = (props: ButtonType) => {
  const theme = useTheme();

  return (
    <Box border={`1px solid ${theme.colors.primary}`}>
      <Button color={theme.colors.primary} {...props} />
    </Box>
  );
};

export const SecondaryButton = (props: ButtonType) => {
  const theme = useTheme();

  return (
    <Box border={`1px solid ${theme.colors.primary}`}>
      <Button color={theme.colors.main} {...props} />
    </Box>
  );
};

export const DisabledButton = (props: ButtonType) => {
  const theme = useTheme();

  return (
    <Box border={`1px solid ${theme.colors.primary}`}>
      <Button disabled color={theme.colors.blacks[4]} {...props} />
    </Box>
  );
};
