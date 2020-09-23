import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import { EditTodoCollection } from '../3collection';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { InsertToDoMutationVariables } from '../../types/graphql';
import {
  useAllCategoryQuery,
  useInsertToDoMutation,
} from '../../types/graphql';

export const EditTodo: FC = () => {
  const { data, loading, error } = useAllCategoryQuery();
  const [insertTodo] = useInsertToDoMutation();
  const insertTodoHandler = ({
    title,
    urgency,
    workload,
  }: InsertToDoMutationVariables) => {
    insertTodo({
      variables: {
        isCompleted: false,
        urgency,
        isToday: false,
        title,
        workload,
      },
    });
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <NoDataMessage />;
  }

  return (
    <Container centerContent>
      <EditTodoCollection
        onPress={insertTodoHandler}
        categories={data.categories}
      />
    </Container>
  );
};
