import React, { FC } from 'react';
import { Box, Divider, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';
import { Text } from 'native-base';
import {
  TodoDetailsTitle,
  TodoDetailsWorkload,
  NewTodoUrgency,
} from '../2single';

type TodoDetailsProps = {
  todo: Todos;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  const { title, workload, category } = todo;

  return (
    <>
      <TodoDetailsTitle title={title} />
      <Divider />
      <TodoDetailsWorkload workload={workload} />
      <Box mt={4}>
        <NewTodoUrgency />
      </Box>
    </>
  );
};
