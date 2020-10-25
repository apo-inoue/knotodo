import React, { FC } from 'react';
import { Box, Text, PrimaryButton, Image, Divider } from '../../ui';
import { useTheme } from 'styled-components';

type LogIn = {
  onLogIn: () => void;
};

export const LogIn: FC<LogIn> = ({ onLogIn }) => {
  const theme = useTheme();

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
            knotodo
          </Text>
        </Box>
      </Box>
      <Box width="100%">
        <Divider />
      </Box>
      <Text color={theme.colors.blacks[5]}>毎日、今日にフォーカスするtodo</Text>
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
