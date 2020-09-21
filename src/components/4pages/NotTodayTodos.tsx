import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  useNotTodayTodosQuery,
  useSetTodayTodoMutation,
} from '../../types/graphql';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { NotTodayTodosCollection } from '../3collection';
import { NOT_TODAY_TODOS } from '../../graphql/query/todos';
import { NotTodayTodosQuery } from '../../types/graphql';

export const NotTodayTodos: FC = () => {
  const { loading, error, data, refetch } = useNotTodayTodosQuery();
  const [
    setToday,
    { loading: mutationLoading, error: mutationError },
  ] = useSetTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading || mutationLoading) {
    return <ScreenLoader />;
  }
  if (error || mutationError) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <NotTodayTodosCollection todos={data.todos} onPress={setTodayHandler} />
    </Container>
  );
};
