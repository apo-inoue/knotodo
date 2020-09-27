import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import { EditTodoCollection } from '../3collection';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { TODAY_TODOS, NOT_TODAY_TODOS } from '../../graphql/query/todos';
import {
  UpdateTodoMutationVariables,
  useUpdateTodoMutation,
  useAllCategoryQuery,
} from '../../types/graphql';

export const EditTodo: FC = () => {
  const { data, loading, error } = useAllCategoryQuery();
  const [updateTodo] = useUpdateTodoMutation({
    refetchQueries: [{ query: TODAY_TODOS }, { query: NOT_TODAY_TODOS }],
  });
  const updateTodoHandler = ({
    id,
    title,
    urgency,
    workload,
    category_id,
  }: UpdateTodoMutationVariables) => {
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
