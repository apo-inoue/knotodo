import React, { FC, useState } from 'react';
import Constants from 'expo-constants';
import {
  Box,
  Text,
  UnderlinedTextForm,
  PrimaryButton,
  KeyboardAvoid,
} from '../../ui';
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
    <KeyboardAvoid
      width="100%"
      behavior="padding"
      flex="1 1"
      justifyContent="center"
      alignItems="center"
      keyboardVerticalOffset={50 + Constants.statusBarHeight}>
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
      <Text color={theme.colors.danger}>{error}</Text>
      <PrimaryButton
        width="100%"
        stretch
        variant="contained"
        text="更新"
        onPress={onPressHandler}
      />
    </KeyboardAvoid>
  );
};
