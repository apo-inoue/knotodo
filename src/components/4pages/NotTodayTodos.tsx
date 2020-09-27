import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  useNotTodayTodosQuery,
  useSetTodayTodoMutation,
  useCompleteToDoMutation,
} from '../../types/graphql';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { NotTodayTodosCollection } from '../3collection';
import { NOT_TODAY_TODOS } from '../../graphql/query/todos';
import { NotTodayTodosQuery } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

export const NotTodayTodos: FC = () => {
  const {
    sort: { sortState },
  } = useSortFilterCtx();
  const { loading, error, data, refetch } = useNotTodayTodosQuery({
    variables: { [sortState.key]: sortState.order },
  });
  // ---------- setToday ----------
  const [setToday] = useSetTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
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

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data?.todos.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <NotTodayTodosCollection
        todos={data.todos}
        onPress={setTodayHandler}
        onComplete={completeTodoHandler}
      />
    </Container>
  );
};
