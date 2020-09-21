import React, { FC } from 'react';
import { Text, Touchable, Box } from '../../ui';
import { Categories } from '../../types/graphql';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';
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
  const vw = useWindowDimensions().width;

  return (
    <Box flexDirection="row" height={48} border="1px solid red">
      <Box flexDirection="column" flexGrow={1} height="100%">
        <Box
          width={0.7 * vw}
          height="100%"
          alignItems="flex-start"
          justifyContent="center"
          border="1px solid blue">
          <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
            {category.category}
          </Text>
        </Box>
      </Box>
      <Box width={80} flexDirection="column" my="auto" alignItems="center">
        <Box flexDirection="row">
          <Touchable p={2} disabled={!isDeleteAllowed}>
            <MaterialCommunityIcons
              name="delete"
              size={28}
              color={
                isDeleteAllowed ? theme.colors.main : theme.colors.blacks[4]
              }
            />
          </Touchable>
          <Touchable p={2}>
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={28}
              color="black"
            />
          </Touchable>
        </Box>
      </Box>
    </Box>
  );
};
