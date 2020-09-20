import React, { useState } from 'react';
import { Container } from '../../ui';
import { NewTodoCollection } from '../3collection';
import { ScreenLoader } from '../../ui/utils/Loader';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { Urgency_Enum, InsertToDoMutationVariables } from '../../types/graphql';
import {
  useAllCategoryQuery,
  useInsertToDoMutation,
} from '../../types/graphql';

export const NewTodo = () => {
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

  console.log(data, error);

  return (
    <Container centerContent>
      <NewTodoCollection
        onPress={insertTodoHandler}
        categories={data.categories}
      />
    </Container>
  );
};
