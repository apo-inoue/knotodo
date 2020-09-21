import React, { FC } from 'react';
import { PrimaryButton, Box, Divider } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategoryAdd, CategoryListItem } from '../2single';

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
  const isDeleteAllowed = categories.length > 0;

  return (
    <>
      {categories.map(category => {
        return (
          <Box key={category.id} width="100%">
            <CategoryListItem
              category={category}
              isDeleteAllowed={isDeleteAllowed}
            />
            <Divider />
          </Box>
        );
      })}
      <Box mt={3} justifyContent="center" width="100%" px={4}>
        <CategoryAdd />
      </Box>
      <Box mt={3} justifyContent="center" width="100%" px={4}>
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          width="100%"
          stretch
          text="追加"
          onPress={onPress}
        />
      </Box>
    </>
  );
};
