import React, { FC } from 'react';
import { Text, Touchable, Box } from '../../ui';
import { Categories } from '../../types/graphql';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

type CategoryListItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
  isDeleteAllowed: boolean;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
  isDeleteAllowed,
}) => {
  const theme = useTheme();

  return (
    <Box flexDirection="row" height={48} width="100%">
      <Box flex="1 1" justifyContent="center" height={48}>
        <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
          {category.category}
        </Text>
      </Box>
      <Box
        width={90}
        flexDirection="row"
        my="auto"
        alignItems="center"
        justifyContent="flex-end">
        <Touchable pr={1.2} disabled={!isDeleteAllowed}>
          <MaterialCommunityIcons
            name="delete"
            size={28}
            color={isDeleteAllowed ? theme.colors.main : theme.colors.blacks[4]}
          />
        </Touchable>
        <Touchable pr={0} mr="-2px">
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={28}
            color={theme.colors.main}
          />
        </Touchable>
      </Box>
    </Box>
  );
};
