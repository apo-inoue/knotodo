import React, { FC } from 'react';
import { Box } from '../../ui';
import { TodosSortCollection } from '../3collection';

export const TodosSort: FC = () => {
  return (
    <Box bg="white" py={4} px={3}>
      <TodosSortCollection />
    </Box>
  );
};
