import React, { FC } from 'react';
import { Container } from '../../ui/layout/Container';
import { useRoute } from '@react-navigation/native';
import { TodoDetailsCollection } from '../3collection';
import { ErrorMessage } from '../1standalone';
import { Todos } from '../../types/graphql';

export const TodoDetails: FC = () => {
  const route = useRoute();
  const todo = (route.params as Todos) ?? undefined;

  if (!todo) return <ErrorMessage />;

  return (
    <Container centerContent>
      <TodoDetailsCollection todo={todo} />
    </Container>
  );
};
