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
            source={require('../../../assets/knot.png')}
          />
        </Box>
        <Box mb="-8px">
          <Text fontSize={40} fontWeight="bold" color="primary">
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
          btnSize="lg"
          onPress={onLogIn}
          text="ログイン/新規登録"
        />
      </Box>
    </>
  );
};
