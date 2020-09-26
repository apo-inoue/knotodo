import React, { FC } from 'react';
import { Box, PrimaryButton } from '../../ui';
import { TodosSortCollection } from '../3collection';

export const TodosSort: FC<{ sortModalToggler: () => void }> = ({
  sortModalToggler,
}) => {
  return (
    <Box bg="white" py={4} px={3}>
      <TodosSortCollection />
    </Box>
  );
};
