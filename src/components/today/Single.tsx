import React, { FC } from 'react';
import { Text } from '../../ui';
import { Todo } from '../../types/graphql';

type TodaySingleType = {
  todo: { __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>;
};

export const TodaySingle: FC<TodaySingleType> = ({ todo }) => {
  return <Text key={todo.id}>{todo.title}</Text>;
};
