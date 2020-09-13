import React, { useCallback } from 'react';
import { Container, ScreenLoader } from '../../ui';
import {
  useTodayTodosQuery,
  useCompleteToDoMutation,
} from '../../types/graphql';
import { TodayTodosCollection } from '../3collection';
import { useFocusEffect } from '@react-navigation/native';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { TODAY_TODOS } from '../../graphql/query/todos';
import { useApolloClient } from '@apollo/client';
import { TodayTodosQuery, CompleteToDoMutation } from '../../types/graphql';
import { useTheme } from 'styled-components';
import { Layout } from '../1standalone/Layout';

export const TodayTodos = () => {
  const client = useApolloClient();
  const { loading, error, data, refetch } = useTodayTodosQuery();
  const [
    completeTodo,
    { loading: mutationLoading, error: mutationError },
  ] = useCompleteToDoMutation({
    // refetchQueries: [{ query: TODAY_TODOS }],
    update(cache, { data }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== data!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: string) => {
    completeTodo({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  console.log(data, 'today');
  console.log(error, mutationError, 'todayError');

  const theme = useTheme();

  if (loading || mutationLoading) return <ScreenLoader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  return (
    <Container>
      <TodayTodosCollection todos={data.todos} onPress={completeTodoHandler} />
    </Container>
  );
};
