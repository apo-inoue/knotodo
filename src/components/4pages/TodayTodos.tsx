import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { TodayTodosCollection } from '../3collection';
import {
  useTodayTodosQuery,
  useCompleteToDoMutation,
  useSetNotTodayTodoMutation,
  TodayTodosQuery,
} from '../../types/graphql';
import { TODAY_TODOS } from '../../graphql/query/todos';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

export const TodayTodos: FC = () => {
  const { sort } = useSortFilterCtx();
  const { loading, error, data, refetch } = useTodayTodosQuery({
    variables: { [sort.key]: sort.order },
  });
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sort.key]: sort.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sort.key]: sort.order },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: string) => {
    completeTodo({ variables: { _eq: id } });
  };
  // ----------- notToday ----------
  const [setToday] = useSetNotTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sort.key]: sort.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sort.key]: sort.order },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setNotTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading) return <ScreenLoader />;
  if (error || !data) return <ErrorMessage />;
  if (data?.todos.length === 0) return <NoDataMessage />;

  return (
    <Container>
      <TodayTodosCollection
        todos={data.todos}
        onPress={completeTodoHandler}
        onPostpone={setNotTodayHandler}
      />
    </Container>
  );
};
