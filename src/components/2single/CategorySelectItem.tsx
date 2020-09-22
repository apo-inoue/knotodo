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
    <Box width="100%" flexDirection="row">
      <Touchable
        width="80%"
        onPress={() => filterSelectHandler(category.category)}>
        <Text>{category.category}</Text>
      </Touchable>
      <Box width={50} height={50}>
        <Touchable onPress={() => setToggleCheckBox(!toggleCheckBox)}>
          <CheckBox checked={toggleCheckBox} />
        </Touchable>
      </Box>
    </Box>
  );
};
