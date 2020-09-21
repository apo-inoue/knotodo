import React, { FC } from 'react';
import { PrimaryButton } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategorySelectItem } from '../2single';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type CategoryProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
};

export const CategoryFilter: FC<CategoryProps> = ({ categories }) => {
  const { filterSelectHandler } = useSortFilterCtx();

  return (
    <>
      {categories.map(category => {
        <CategorySelectItem category={category} />;
      })}
      <PrimaryButton
        variant="contained"
        text="解除"
        onPress={() => filterSelectHandler(null)}
      />
    </>
  );
};
