import React, { FC } from 'react';
import { Box, Text, PrimaryButton, Image, Divider } from '../../ui';

type LogIn = {
  onLogIn: () => void;
};

export const LogIn: FC<LogIn> = ({ onLogIn }) => {
  return (
    <>
      <Box flexDirection="row" alignItems="flex-end">
        <Box mr={2}>
          <Image
            height={36}
            width={36}
            source={require('../../../assets/knot-color.png')}
          />
        </Box>
        <Box height={40}>
          <Text fontSize={40} lineHeight="50px" fontWeight="bold" color="main">
            KnoToDo
          </Text>
        </Box>
      </Box>
      <Box width="100%">
        <Divider />
      </Box>
      <Text color="grey">Tomorrow never comes, it is alway today</Text>
      <Box mt={4}>
        <PrimaryButton
          variant="contained"
          onPress={onLogIn}
          text="ログイン/新規登録"
        />
      </Box>
    </>
  );
};
