import React, { FC } from 'react';
import { Text } from '../../ui';
import { Todos } from '../../types/graphql';

type TodoDetailsProps = {
  todo: Todos;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  return <Text>{todo.title}</Text>;
};
