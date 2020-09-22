import React, { FC } from 'react';
import { PrimaryButton, Box } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategorySelectItem } from '../2single';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { FlatList } from 'react-native';
import { Divider } from '../../ui/utils/Divider';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategoryProps = {
  categories: CategoryType[];
};

export const CategoryFilter: FC<CategoryProps> = ({ categories }) => {
  const { filterSelectHandler } = useSortFilterCtx();

  return (
    <>
      <Box flexDirection="column" flexBasis="400px">
        <FlatList<CategoryType>
          data={categories}
          keyExtractor={(item: CategoryType) => `${item.id}`}
          renderItem={({ item }: { item: CategoryType }) => (
            <>
              <CategorySelectItem category={item} />
              <Divider />
            </>
          )}
        />
      </Box>
      <PrimaryButton
        variant="contained"
        text="解除"
        onPress={() => filterSelectHandler(null)}
      />
    </>
  );
};
