import React from 'react';
import { Container } from '../../ui';
import { SortCollection } from '../3collection';
import { useSortCtx } from '../../containers/contexts/sort';

export const Sort = () => {
  const { sortInputHandler } = useSortCtx();

  return (
    <Container>
      <SortCollection onPress={sortInputHandler} />
    </Container>
  );
};
