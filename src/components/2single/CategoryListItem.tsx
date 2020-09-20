import React, { FC } from 'react';
import { Text } from '../../ui/typography/Text';
import { Categories } from '../../types/graphql';
import { Touchable } from '../../ui/button/Touchable';
import { Box } from '../../ui/layout/Box';
import { Divider } from '../../ui/utils/Divider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

type CategoryListItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({ category }) => {
  return <Text>{category.category}</Text>;
};

export const CategoryList: FC<CategoryListItemProps> = ({ category }) => {
  return (
    <Box>
      <Divider />
      <Box flexDirection="row" height={48}>
        <Box flexDirection="column" flexGrow={1}>
          <Box width="80%" alignItems="flex-start" justifyContent="center">
            <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
              {category.category}
            </Text>
          </Box>
        </Box>
        <Box width={100} flexDirection="column" my="auto" alignItems="center">
          <Touchable>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
          </Touchable>
          <Touchable>
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={24}
              color="black"
            />
          </Touchable>
        </Box>
      </Box>
    </Box>
  );
};
