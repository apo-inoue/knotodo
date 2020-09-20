import React, { FC } from 'react';
import { PrimaryButton } from '../../ui';
import { CategoriesPicker, Urgency, WorkloadEdit } from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';
import { Box } from '../../ui/layout/Box';
import { TodoTitleEdit } from '../2single/TodoTitle';

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
      <Box width="80%">
        <TodoTitleEdit />
      </Box>
      <Box mt={3}>
        <WorkloadEdit />
      </Box>
      <Box mt={3}>
        <Urgency />
      </Box>
      <Box>
        <CategoriesPicker categories={categories} />
      </Box>
      <Box mt={3}>
        <PrimaryButton
          variant="contained"
          width="80%"
          stretch
          text="追加"
          onPress={() => onPress({ title, urgency, workload })}
        />
      </Box>
    </>
  );
};
