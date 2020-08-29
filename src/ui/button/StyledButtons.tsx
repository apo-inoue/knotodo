import React from 'react';
import { Button } from 'react-native';
import { ButtonType } from './ButtonBase';
import { useTheme } from 'styled-components';

export const PrimaryButton = (props: ButtonType) => {
  const theme = useTheme();

  return <Button color={theme.colors.primary} {...props} />;
};

export const SecondaryButton = (props: ButtonType) => {
  const theme = useTheme();

  return <Button color={theme.colors.main} {...props} />;
};

export const DisabledButton = (props: ButtonType) => {
  const theme = useTheme();

  return <Button disabled color={theme.colors.blacks[4]} {...props} />;
};
