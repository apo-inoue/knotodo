import React, { FC } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import { Title, CategoriesPicker, Urgency, Workloads } from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';
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
      <Title />
      <Divider />
      <Urgency />
      <Divider />
      <Workloads />
      <Divider />
      <CategoriesPicker categories={categories} />
      <Box mt={3}>
        <PrimaryButton
          variant="contained"
          text="追加"
          onPress={() => onPress({ title, urgency, workload })}
        />
      </Box>
    </>
  );
};
