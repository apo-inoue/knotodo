import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { Container } from '../../ui';
import { ErrorMessage } from '../1standalone';
import { TodoDetailsCollection } from '../3collection';

export const TodoDetails: FC = () => {
  const route = useRoute();
  const todo = route.params as Todos;

  if (!todo) return <ErrorMessage />;

  return (
    <Container centerContent>
      <TodoDetailsCollection todo={todo} />
    </Container>
  );
};
