import React, { FC } from 'react';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components';
import { PrimaryButton, Box, Text, FlatList, Divider } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategorySelectItem } from '../2single';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategoryProps = {
  categories: CategoryType[];
  filterModalToggler: () => void;
};

export const CategoryFilter: FC<CategoryProps> = ({
  categories,
  filterModalToggler,
}) => {
  const theme = useTheme();
  const {
    filter: {
      filterState: { isAll },
      isAllToggler,
    },
  } = useSortFilterCtx();

  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mb={3}>
        <Text>すべて</Text>
        <Switch
          trackColor={{ false: theme.colors.white, true: theme.colors.main }}
          thumbColor={theme.colors.white}
          ios_backgroundColor={theme.colors.blacks[8]}
          onValueChange={isAllToggler}
          value={isAll}
        />
      </Box>
      <FlatList<CategoryType>
        data={categories}
        keyExtractor={(item: CategoryType) => `${item.id}`}
        renderItem={({ item }: { item: CategoryType }) => (
          <Box width="100%">
            <CategorySelectItem category={item} />
            <Divider />
          </Box>
        )}
      />
      <PrimaryButton
        variant="contained"
        width="100%"
        stretch
        onPress={filterModalToggler}
        text="OK"
      />
    </>
  );
};
