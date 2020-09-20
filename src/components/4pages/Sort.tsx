import React from 'react';
import { Container } from '../../ui';
import { SortCollection } from '../3collection';
import { useSortCtx } from '../../containers/contexts/sort';

export const Sort = () => {
  return (
    <Container>
      <SortCollection />
    </Container>
  );
};
