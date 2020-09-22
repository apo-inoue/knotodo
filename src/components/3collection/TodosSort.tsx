import React, { FC } from 'react';
import { PrimaryButton, Divider } from '../../ui';
import { useNavigation } from '@react-navigation/native';

export const TodosSort: FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Divider />
      <PrimaryButton text="検索" onPress={navigation.goBack} />
    </>
  );
};
