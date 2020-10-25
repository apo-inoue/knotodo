import React, { FC } from 'react';
import { PrimaryButton, Divider, Box, Text } from '../../ui';
import { Todos_Order_By } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type TodoSortItemProps = {
  sortItem: {
    name: string;
    value: keyof Todos_Order_By;
    desc: string;
    asc: string;
  };
  sortModalToggler: () => void;
};

export const TodoSortItem: FC<TodoSortItemProps> = ({
  sortItem,
  sortModalToggler,
}) => {
  const {
    sort: { selectSortHandler },
  } = useSortFilterCtx();
  const onPressDesc = () => {
    selectSortHandler(sortItem.value, 'desc');
    sortModalToggler();
  };
  const onPressAsc = () => {
    selectSortHandler(sortItem.value, 'asc');
    sortModalToggler();
  };

  return (
    <Box key={sortItem.name} width="100%" height={64}>
      <Box flexDirection="row" justifyContent="space-between" width="100%">
        <Box flex="1 1" justifyContent="center" height="100%">
          <Text>{sortItem.name}</Text>
        </Box>
        <Box
          flexDirection="row"
          mb="12px"
          alignItems="center"
          justifyContent="flex-end">
          <Box>
            <PrimaryButton
              variant="outlined"
              width={90}
              stretch
              borderBottomRightRadius={0}
              borderTopRightRadius={0}
              text={sortItem.desc}
              onPress={onPressDesc}
            />
          </Box>
          <Box mr="-2px" />
          <PrimaryButton
            variant="contained"
            width={90}
            stretch
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            text={sortItem.asc}
            onPress={onPressAsc}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
