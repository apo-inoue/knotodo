import React, { FC } from 'react';
import { PrimaryButton, Box } from '../../ui';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
  TodoTitleInput,
} from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';

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
        <TodoTitleInput />
      </Box>
      <Box mt={3}>
        <TodoWorkloadSelect />
      </Box>
      <Box mt={3}>
        <TodoUrgencySelect />
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
