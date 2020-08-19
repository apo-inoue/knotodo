import React from 'react';
import { Button } from 'react-native';
import { useCustomTheme } from '../theme/CustomThemeProvider';
import { ButtonType } from '../ui/Button';

export const PrimaryButton = (props: ButtonType) => {
  const theme = useCustomTheme();

  return <Button color={theme.colors.primary} {...props} />;
};

export const SecondaryButton = (props: ButtonType) => {
  const theme = useCustomTheme();

  return <Button color={theme.colors.main} {...props} />;
};

export const DisabledButton = (props: ButtonType) => {
  const theme = useCustomTheme();

  return <Button disabled color={theme.colors.blacks[4]} {...props} />;
};