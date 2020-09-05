import React, { FC } from 'react';
import { Box, Divider, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';
import { Text } from 'native-base';
import { Touchable } from '../../ui/button/Touchable';
import {
  TodoDetailsTitle,
  TodoDetailsWorkload,
  NewTodoUrgency,
} from '../2single';

type TodoDetailsProps = {
  todo: Todos;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  const { id, title, workload, category } = todo;

  return (
    <>
      <TodoDetailsTitle title={title} />
      <Divider />
      <TodoDetailsWorkload workload={workload} />
      <Touchable onPress={() => console.log(todo.id)}>
        <Text>{todo.id}</Text>
      </Touchable>
      <Box mt={4}>
        <NewTodoUrgency />
      </Box>
    </>
  );
};
