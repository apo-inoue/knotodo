import React, { FC } from 'react';
import { Text, Touchable, CheckBox, Box } from '../../ui';
import { Categories } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type CategorySelectItemProps = {
  category: { __typename?: 'categories' } & Pick<Categories, 'id' | 'title'>;
};

export const CategorySelectItem: FC<CategorySelectItemProps> = ({
  category,
}) => {
  const {
    filter: {
      filterState,
      filterState: { isAll },
      checkOnHandler,
      checkOffHandler,
    },
  } = useSortFilterCtx();
  const isChecked = filterState.categoryIds.includes(category.id);
  const onToggleCheckBox = () => {
    isChecked ? checkOffHandler(category.id) : checkOnHandler(category.id);
  };

  return (
    <Touchable onPress={onToggleCheckBox}>
      <Box width="100%" flexDirection="row" height={50}>
        <Box flex="1 1" justifyContent="center">
          <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
            {category.title}
          </Text>
        </Box>
        <Box width={50} flexDirection="row" my="auto" justifyContent="flex-end">
          <CheckBox checked={isAll || isChecked} onPress={onToggleCheckBox} />
        </Box>
      </Box>
    </Touchable>
  );
};
