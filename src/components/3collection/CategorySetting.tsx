import React, { FC } from 'react';
import { PrimaryButton, Box, Divider } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategoryAdd, CategoryListItem } from '../2single';
import { FlatList } from 'react-native';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategorySettingProps = {
  categories: CategoryType[];
  onPress: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, c: string) => void;
};

export const CategorySetting: FC<CategorySettingProps> = ({
  categories,
  onPress,
  onDelete,
  onUpdate,
}) => {
  const isDeleteAllowed = categories.length > 0;

  return (
    <Box width="100%" height="100%">
      <Box mt={2} width="100%" />
      <Box flexDirection="column" flexBasis="400px">
        <FlatList<CategoryType>
          data={categories}
          keyExtractor={(item: CategoryType) => `${item.id}`}
          renderItem={({ item }: { item: CategoryType }) => (
            <>
              <CategoryListItem
                category={item}
                isDeleteAllowed={isDeleteAllowed}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
              <Divider />
            </>
          )}
        />
      </Box>
      <Box
        flexDirection="column"
        width="100%"
        flex="1 1"
        justifyContent="center"
        alignItems="center">
        <Box width="100%">
          <Box justifyContent="center" width="100%" px={4}>
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
        </Box>
      </Box>
    </Box>
  );
};
