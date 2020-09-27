import React, { FC } from 'react';
import { Box } from '../../ui';
import { TodosSortCollection } from '../3collection';

type TodosSortProps = {
  sortModalToggler: () => void;
};

export const TodosSort: FC<TodosSortProps> = ({ sortModalToggler }) => {
  return (
    <Box bg="white" py={4} px={3}>
      <TodosSortCollection sortModalToggler={sortModalToggler} />
    </Box>
  );
};
