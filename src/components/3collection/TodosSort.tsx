import React, { FC } from 'react';
import { Box } from '../../ui';
import { TodoSortItem } from '../2single';
import { TodayTodosQueryVariables } from '../../types/graphql';

type SortItem = {
  name: string;
  value: keyof TodayTodosQueryVariables;
  desc: string;
  asc: string;
};

type TodosSortProps = {
  sortModalToggler: () => void;
};

export const TodosSort: FC<TodosSortProps> = ({ sortModalToggler }) => {
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
    </>
  );
};
