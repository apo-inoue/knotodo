import React, { FC, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  useFutureTodosQuery,
  useSetTodayTodoMutation,
  useCompleteTodoMutation,
  FutureTodosQuery,
  useDeleteTodoMutation,
} from '../../types/graphql';
import { FUTURE_TODOS } from '../../graphql/query/todos';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage, AddFab } from '../1standalone';
import { FutureTodosCollection } from '../3collection';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { useTodoCtx } from '../../containers/contexts/todo';

export const FutureTodos: FC = () => {
  const navigation = useNavigation();
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data, refetch } = useFutureTodosQuery({
    variables: { order_by: sortState, _in: categoryIdsVariables },
  });
  // ---------- setToday ----------
  const [setToday] = useSetTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setTodayHandler = (id: number) => {
    setToday({ variables: { _eq: id } });
  };
  // ---------- complete ----------
  const [completeTodo] = useCompleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: number) => {
    completeTodo({ variables: { _eq: id } });
  };

  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler(false);
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };
  // ---------- delete ----------
  const [deleteToDo] = useDeleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<FutureTodosQuery>({
        query: FUTURE_TODOS,
        variables: {
          orderBy: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
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

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data?.todos.length === 0) {
    return (
      <>
        <NoDataMessage />
        <AddFab onPress={mountAndNavigateHandler} />
      </>
    );
  }

  return (
    <Container>
      <FutureTodosCollection
        todos={data.todos}
        onPress={setTodayHandler}
        onComplete={completeTodoHandler}
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
