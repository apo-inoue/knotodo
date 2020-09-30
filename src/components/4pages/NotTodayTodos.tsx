import React, { FC, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  useNotTodayTodosQuery,
  useSetTodayTodoMutation,
  useCompleteToDoMutation,
  NotTodayTodosQuery,
} from '../../types/graphql';
import { NOT_TODAY_TODOS } from '../../graphql/query/todos';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage, AddFab } from '../1standalone';
import { NotTodayTodosCollection } from '../3collection';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { useTodoCtx } from '../../containers/contexts/todo';
import {
  useDeleteToDoMutation,
  CompletedTodosQuery,
} from '../../types/graphql';

export const NotTodayTodos: FC = () => {
  const navigation = useNavigation();
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data, refetch } = useNotTodayTodosQuery({
    variables: { [sortState.key]: sortState.order, _in: categoryIdsVariables },
  });
  // ---------- setToday ----------
  const [setToday] = useSetTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
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
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: string) => {
    completeTodo({ variables: { _eq: id } });
  };

  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: false, isCompleted: false });
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };
  // ---------- delete ----------
  const [deleteToDo] = useDeleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const deleteToDoHandler = (id: string) => {
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
      <NotTodayTodosCollection
        todos={data.todos}
        onPress={setTodayHandler}
        onComplete={completeTodoHandler}
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
