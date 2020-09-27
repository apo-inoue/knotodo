import React, { FC, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage, AddFab } from '../1standalone';
import { TodayTodosCollection } from '../3collection';
import {
  useTodayTodosQuery,
  useCompleteToDoMutation,
  useSetNotTodayTodoMutation,
  TodayTodosQuery,
} from '../../types/graphql';
import { TODAY_TODOS } from '../../graphql/query/todos';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { useTodoCtx } from '../../containers/contexts/todo';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

export const TodayTodos: FC = () => {
  const navigation = useNavigation();
  const {
    sort: { sortState },
    filter: {
      filterState: { categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = categoryIds.length === 0 ? null : categoryIds;
  const { loading, error, data, refetch } = useTodayTodosQuery({
    variables: {
      [sortState.key]: sortState.order,
      _in: categoryIdsVariables,
    },
  });
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
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
        variables: { [sortState.key]: sortState.order },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: { [sortState.key]: sortState.order },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setNotTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };

  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: true, isCompleted: false });
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading) return <ScreenLoader />;
  if (error || !data) return <ErrorMessage />;
  if (data?.todos.length === 0)
    return (
      <>
        <NoDataMessage />
        <AddFab onPress={mountAndNavigateHandler} />
      </>
    );

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
