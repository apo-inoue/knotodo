import React, { FC } from 'react';
import { Text } from '../../../ui/typography/Text';

type CategoryListItemProps = {
  category: any;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({ category }) => {
  return <Text>{category.category}</Text>;
};
