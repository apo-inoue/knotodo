import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { PrimaryButton } from '../../ui';
import { CategoryListItem } from '../2single/Setting/CategoryListItem';
import { Categories } from '../../types/graphql';
import { Divider } from '../../ui/utils/Divider';
import { useNavigation } from '@react-navigation/native';

type SortProps = {
  onPress: (e: string) => void;
};

export const Sort: FC<SortProps> = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <Divider />
      <PrimaryButton text="検索" onPress={navigation.goBack} />
    </>
  );
};
