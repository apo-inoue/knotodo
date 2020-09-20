import React, { FC } from 'react';
import { PrimaryButton } from '../../ui';
import { Divider } from '../../ui/utils/Divider';
import { useNavigation } from '@react-navigation/native';

export const Sort: FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Divider />
      <PrimaryButton text="検索" onPress={navigation.goBack} />
    </>
  );
};
