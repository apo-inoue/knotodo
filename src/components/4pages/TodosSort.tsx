import React, { FC, useState } from 'react';
import { Container } from '../../ui';
import { TodosSortCollection } from '../3collection';

export const TodosSort: FC = () => {
  return (
    <Container centerContent>
      <TodosSortCollection />
    </Container>
  );
};
