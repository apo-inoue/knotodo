import React, { FC } from 'react';
import { Box } from '../../ui';
import { TodoSortItem } from '../2single/TodoSortItem';

type AvailableSort = {
  name: string;
  desc: string;
  asc: string;
};

export const TodosSort: FC = () => {
  const availableSorts: AvailableSort[] = [
    {
      name: '作成日',
      desc: '古い順',
      asc: '新しい順',
    },
    {
      name: '工数',
      desc: '少ない順',
      asc: '多い順',
    },
    {
      name: '期日',
      desc: '近い順',
      asc: '遠い順',
    },
  ];

  return (
    <>
      {availableSorts.map(availableSort => (
        <Box width="100%" key={availableSort.name}>
          <TodoSortItem sort={availableSort} />
        </Box>
      ))}
    </>
  );
};
