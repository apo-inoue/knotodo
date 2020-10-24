import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import { EditTodoCollection } from '../3collection';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import {
  UpdateTodoMutationVariables,
  useUpdateTodoMutation,
  useCategoriesQuery,
} from '../../types/graphql';
import { TODAY_TODOS, FUTURE_TODOS } from '../../graphql/query/todos';
import { useTodoCtx } from '../../containers/contexts/todo';

export const EditTodo: FC = () => {
  const { data, loading, error } = useCategoriesQuery();
  const {
    editTodo: {
      state: { id, title, urgency, workload, category_id },
    },
  } = useTodoCtx();

  // ---------- update ----------
  const [updateTodo] = useUpdateTodoMutation({
    refetchQueries: [{ query: TODAY_TODOS }, { query: FUTURE_TODOS }],
  });
  const updateTodoHandler = () => {
    updateTodo({
      variables: {
        id,
        title,
        urgency,
        workload,
        category_id,
      },
    });
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data.categories.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container centerContent>
      <EditTodoCollection
        onPress={updateTodoHandler}
        categories={data.categories}
      />
    </Container>
  );
};
