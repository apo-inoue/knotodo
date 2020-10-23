import React, { FC, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage, AddFab } from '../1standalone';
import { TodayTodosCollection } from '../3collection';
import {
  useTodayTodosQuery,
  useCompleteTodoMutation,
  useSetNotTodayTodoMutation,
  TodayTodosQuery,
  useDeleteTodoMutation,
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
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data, refetch } = useTodayTodosQuery({
    variables: {
      order_by: [{ completed_at: 'desc' }],
      _in: categoryIdsVariables,
    },
  });
  // ---------- complete ----------
  const [completeTodo] = useCompleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: number) => {
    completeTodo({ variables: { _eq: id } });
  };
  // ----------- notToday ----------
  const [setToday] = useSetNotTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setNotTodayHandler = (id: number) => {
    setToday({ variables: { _eq: id } });
  };

  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler(true);
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };
  // ---------- delete ----------
  const [deleteToDo] = useDeleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: {
          __typename: 'query_root',
          todos: newTodos,
        },
      });
    },
  });
  const deleteToDoHandler = (id: number) => {
    deleteToDo({ variables: { _eq: id } });
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
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
