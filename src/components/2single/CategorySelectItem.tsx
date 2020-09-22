import React, { FC, useState } from 'react';
import { CheckBox } from 'react-native';
import { Text, Touchable } from '../../ui';
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
      {console.log('hello')}
      <Touchable
        width="80%"
        onPress={() => filterSelectHandler(category.category)}>
        <Text>{category.category}</Text>
      </Touchable>
      <Box width={50} height={50}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </Box>
      <Text>helo</Text>
    </Box>
  );
};
