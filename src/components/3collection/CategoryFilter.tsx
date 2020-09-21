import React, { FC } from 'react';
import { PrimaryButton, Box } from '../../ui';
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
        <Box key={category.id} width="100%">
          <CategorySelectItem category={category} />
        </Box>;
      })}
      <PrimaryButton
        variant="contained"
        text="解除"
        onPress={() => filterSelectHandler(null)}
      />
    </>
  );
};
