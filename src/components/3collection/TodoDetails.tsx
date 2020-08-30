import React, { FC } from 'react';
import { Text } from '../../ui';

type TodoDetailsProps = {
  todo: any;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  return <Text>{todo.title}</Text>;
};
