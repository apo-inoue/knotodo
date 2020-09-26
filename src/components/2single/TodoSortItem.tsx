import React, { FC } from 'react';
import { PrimaryButton, Divider, Box, Text } from '../../ui';
import { TodayTodosQueryVariables } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type TodoSortItemProps = {
  sortItem: {
    name: string;
    value: keyof TodayTodosQueryVariables;
    desc: string;
    asc: string;
  };
};

export const TodoSortItem: FC<TodoSortItemProps> = ({ sortItem }) => {
  const { sort, sortPressHandler } = useSortFilterCtx();
  const onPressDesc = () => {
    sortPressHandler({ key: sortItem.value, order: 'desc' });
  };
  const onPressAsc = () => {
    sortPressHandler({ key: sortItem.value, order: 'asc' });
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
