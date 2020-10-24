import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text } from '../../ui';
import { TodoSortItem } from '../2single';
import { Todos_Order_By } from '../../types/graphql';
import { Touchable } from '../../ui/button/Touchable';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type SortItem = {
  name: string;
  value: keyof Todos_Order_By;
  desc: string;
  asc: string;
};

type ModalSortProps = {
  sortModalToggler: () => void;
};

export const ModalSort: FC<ModalSortProps> = ({ sortModalToggler }) => {
  const theme = useTheme();
  const {
    sort: { clearSortHandler },
  } = useSortFilterCtx();
  const sortItems: SortItem[] = [
    {
      name: '作成日',
      value: 'created_at',
      desc: '古い順',
      asc: '新しい順',
    },
    {
      name: '工数',
      value: 'workload',
      desc: '少ない順',
      asc: '多い順',
    },
    {
      name: '期日',
      value: 'urgency',
      desc: '近い順',
      asc: '遠い順',
    },
  ];

  return (
    <>
      {sortItems.map(sortItem => (
        <Box width="100%" key={sortItem.name}>
          <TodoSortItem
            sortItem={sortItem}
            sortModalToggler={sortModalToggler}
          />
        </Box>
      ))}
      <Box mt={3} width="100%" alignItems="center">
        <Touchable onPress={clearSortHandler}>
          <Text color={theme.colors.main}>デフォルト</Text>
        </Touchable>
      </Box>
    </>
  );
};
