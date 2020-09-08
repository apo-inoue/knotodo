import React from 'react';
import { Container } from '../../ui';
import { SortCollection } from '../3collection';
import { useSortCtx } from '../../containers/sort/useCtx';

export const Sort = () => {
  const { sortInputHandler } = useSortCtx();

  return (
    <Container>
      <SortCollection onPress={sortInputHandler} />
    </Container>
  );
};
