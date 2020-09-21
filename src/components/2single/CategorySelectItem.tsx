import React, { FC } from 'react';
import { Text, Touchable } from '../../ui';
import { Categories } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type CategorySelectItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
};

export const CategorySelectItem: FC<CategorySelectItemProps> = ({
  category,
}) => {
  const { filterSelectHandler } = useSortFilterCtx();

  return (
    <Touchable onPress={() => filterSelectHandler(category.category)}>
      <Text>{category.category}</Text>
    </Touchable>
  );
};
