import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { PrimaryButton } from '../../ui';
import { CategoryListItem } from '../2single';
import { Categories } from '../../types/graphql';

type CategoryProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: () => void;
};

export const Category: FC<CategoryProps> = ({ categories, onPress }) => {
  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CategoryListItem category={item} />}
      />
      <PrimaryButton text="追加" onPress={onPress} />
    </>
  );
};
