import React, { FC } from 'react';
import { Text } from '../../ui/typography/Text';
import { Categories } from '../../types/graphql';

type CategoryListItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({ category }) => {
  return <Text>{category.category}</Text>;
};
