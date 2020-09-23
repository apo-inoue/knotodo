import React, { FC, useState } from 'react';
import { Text, Touchable, CheckBox } from '../../ui';
import { Categories } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { Box } from '../../ui/layout/Box';

type CategorySelectItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
};

export const CategorySelectItem: FC<CategorySelectItemProps> = ({
  category,
}) => {
  const { filterSelectHandler } = useSortFilterCtx();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Box width="100%" flexDirection="row" height={50}>
      <Box flex="1 1" justifyContent="center">
        <Touchable
          p={0}
          justifyContent="center"
          onPress={() => filterSelectHandler(category.category)}>
          <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
            {category.category}
          </Text>
        </Touchable>
      </Box>
      <Box width={50} flexDirection="row" my="auto" justifyContent="flex-end">
        <Touchable onPress={() => setToggleCheckBox(!toggleCheckBox)}>
          <CheckBox checked={toggleCheckBox} />
        </Touchable>
      </Box>
    </Box>
  );
};
