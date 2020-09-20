import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { PrimaryButton } from '../../ui';
import { CategoryListItem } from '../2single';
import { Categories } from '../../types/graphql';
import { CategoryAdd } from '../2single/CategoryAdd';

type CategorySettingProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: () => void;
};

export const CategorySetting: FC<CategorySettingProps> = ({
  categories,
  onPress,
}) => {
  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CategoryListItem category={item} />}
      />
      <CategoryAdd />
      <PrimaryButton text="追加" onPress={onPress} />
    </>
  );
};
