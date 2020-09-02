import React, { FC } from 'react';
import { Box, Divider, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';
import { TodoDetailsTitle, TodoDetailsWorkload } from '../2single';

type TodoDetailsProps = {
  todo: Todos;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  const { title, workload } = todo;

  return (
    <>
      <TodoDetailsTitle title={title} />
      <Divider />
      <TodoDetailsWorkload workload={workload} />
    </>
  );
};
