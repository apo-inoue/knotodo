import React, { useState } from 'react';
import { Container } from '../../ui';
import { NewTodoCollection } from '../3collection';
import { ScreenLoader } from '../../ui/utils/Loader';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { useAllCategoryQuery, useInsertToDoMutation } from '../../types/graphql';

export const NewTodo = () => {
  const { data, loading, error } = useAllCategoryQuery();
  const [insertTodo] = useInsertToDoMutation();
  const insertTodoHandler = () => {
    insertTodo();
  };

  if (loading) return <ScreenLoader />;
  if (!error) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  return (
    <Container>
      <NewTodoCollection onPress={insertTodoHandler} categories={data.categories} />
    </Container>
  );
};
