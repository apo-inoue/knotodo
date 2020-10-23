import React, { FC, useCallback } from 'react';
import { Container, Loader } from '../../ui';
import { useFocusEffect } from '@react-navigation/native';
import {
  useCompletedTodosQuery,
  useDeleteTodoMutation,
} from '../../types/graphql';
import { ArchiveTodosCollection } from '../3collection';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { COMPLETED_TODOS } from '../../graphql/query/todos';
import { useRestoreNotTodayMutation } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import {
  CompletedTodosQuery,
  useRestoreTodayMutation,
} from '../../types/graphql';

export const ArchiveTodos: FC = () => {
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data, refetch } = useCompletedTodosQuery({
    variables: { order_by: sortState, _in: categoryIdsVariables },
  });
  const [deleteTodo] = useDeleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const deleteTodoHandler = (id: number) => {
    deleteTodo({ variables: { _eq: id } });
  };
  // ---------- restoreToday ----------
  const [restoreToday] = useRestoreTodayMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreTodayHandler = (id: number) => {
    restoreToday({ variables: { _eq: id } });
  };
  // ---------- restoreNotToday ----------
  const [restoreNotToday] = useRestoreNotTodayMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        variables: {
          order_by: sortState,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreNotTodayHandler = (id: number) => {
    restoreNotToday({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data?.todos.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <ArchiveTodosCollection
        todos={data.todos}
        onPress={deleteTodoHandler}
        onRestoreToday={restoreTodayHandler}
        onRestoreNotToday={restoreNotTodayHandler}
      />
    </Container>
  );
};
