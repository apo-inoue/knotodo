import React, { FC, useState } from 'react';
import { Box, Text, UnderlinedTextForm, PrimaryButton } from '../../ui';
import { useTheme } from 'styled-components';

type MessageSettingProps = {
  message: string | null;
  onPress: (message: string) => void;
};

export const MessageSetting: FC<MessageSettingProps> = ({
  message,
  onPress,
}) => {
  const theme = useTheme();
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const onChangeTextHandler = (text: string) => {
    setValue(text);
  };
  const onPressHandler = () => {
    if (value === '') {
      setError('入力してください');
    } else {
      onPress(value);
    }
  };

  return (
    <Box width="100%">
      <Text textAlign="center" color={theme.colors.blacks[7]}>
        今のヒトコト
      </Text>
      <Text textAlign="center">{message ? message : '未設定'}</Text>
      <Box mt="24px" />
      <UnderlinedTextForm
        err={error}
        onChangeText={onChangeTextHandler}
        value={value}
      />
      <PrimaryButton variant="contained" text="更新" onPress={onPressHandler} />
    </Box>
  );
};
