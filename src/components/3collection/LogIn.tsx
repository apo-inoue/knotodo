import React, { FC } from 'react';
import { Box, Text, PrimaryButton } from '../../ui';

type LogIn = {
  onLogIn: () => void;
};

export const LogIn: FC<LogIn> = ({ onLogIn }) => {
  return (
    <>
      <Text fontSize={40} fontWeight="bold" color="primary">
        KnoToDo
      </Text>
      <Text color="grey">Tomorrow never comes, it is alway today</Text>
      <Box mt={4}>
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          onPress={onLogIn}
          text="ログイン/新規登録"
        />
      </Box>
    </>
  );
};
