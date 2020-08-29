import React, { useState } from 'react';
import { Container } from '../../ui';
import { NewTodoCollection } from '../2templates/NewTodoCollection';

export const NewTodo = () => {
  return (
    <Container>
      <NewTodoCollection />
    </Container>
  );
};
