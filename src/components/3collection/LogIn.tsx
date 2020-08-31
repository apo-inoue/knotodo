import React, { FC } from 'react';
import { Box, Text, PrimaryButton } from '../../ui';

type LogIn = {
  onLogIn: () => void;
};

export const LogIn: FC<LogIn> = ({ onLogIn }) => {
  return (
    <>
      <Text fontSize={20} color="danger">
        こんにちは
      </Text>
      <Box mt={20} />
      <PrimaryButton onPress={onLogIn} title="logIn" mt={120} />
    </>
  );
};
