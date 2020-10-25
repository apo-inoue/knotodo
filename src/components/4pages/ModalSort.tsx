import React, { FC } from 'react';
import { Box } from '../../ui';
import { ModalSortCollection } from '../3collection';

type ModalSortProps = {
  sortModalToggler: () => void;
};

export const ModalSort: FC<ModalSortProps> = ({ sortModalToggler }) => {
  return (
    <Box bg="white" py={4} px={3}>
      <ModalSortCollection sortModalToggler={sortModalToggler} />
    </Box>
  );
};
