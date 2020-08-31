import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { PrimaryButton } from '../../ui';
import { CategoryListItem } from '../2single/Setting/CategoryListItem';

type SettingProps = {
  categories: any;
  onPress: () => void;
};

export const Setting: FC<SettingProps> = ({ categories, onPress }) => {
  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CategoryListItem category={item} />}
      />
      <PrimaryButton title="追加" onPress={onPress} />
    </>
  );
};
