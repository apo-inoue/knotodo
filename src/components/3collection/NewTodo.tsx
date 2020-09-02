import React, { FC } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import {
  NewTodoTitle,
  NewTodoCategories,
  NewTodoUrgency,
  NewTodoWorkload,
} from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/todo/useCtx';
import { Box } from '../../ui/layout/Box';

type NewTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({ title, urgency, workload }: InsertToDoMutationVariables) => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const {
    state: { title, urgency, workload },
  } = useTodoCtx();

  return (
    <>
      <NewTodoTitle />
      <Divider />
      <NewTodoUrgency />
      <Divider />
      <NewTodoWorkload />
      <Divider />
      <NewTodoCategories categories={categories} />
      <Box mt={3}>
        <PrimaryButton
          title="追加"
          onPress={() => onPress({ title, urgency, workload })}
        />
      </Box>
    </>
  );
};
