import React, { FC } from 'react';
import { Box, Divider, Text, Touchable } from '../../ui';
import { Todos } from '../../types/graphql';
import { Workload, Urgency } from '../2single';

type TodoDetailsProps = {
  todo: Todos;
};

export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  const { id, title, workload, category } = todo;

  return (
    <>
      <Text>{title}</Text>
      <Divider />
      <Workload workload={workload} />
      <Touchable variant="outlined" onPress={() => console.log(todo.id)}>
        <Text>{id}</Text>
      </Touchable>
      <Box mt={4}>
        <Urgency />
      </Box>
    </>
  );
};
