import React, { FC, useCallback } from 'react';
import { Container, Loader } from '../../ui';
import { useFocusEffect } from '@react-navigation/native';
import {
  useCompletedTodosQuery,
  useDeleteToDoMutation,
} from '../../types/graphql';
import { ArchiveTodosCollection } from '../3collection';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { COMPLETED_TODOS } from '../../graphql/query/todos';
import { useRestoreNotTodayMutation } from '../../types/graphql';
import {
  CompletedTodosQuery,
  useRestoreTodayMutation,
} from '../../types/graphql';

export const ArchiveTodos: FC = () => {
  const { loading, error, data, refetch } = useCompletedTodosQuery({
    fetchPolicy: 'network-only',
  });
  const [deleteToDo] = useDeleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const deleteToDoHandler = (id: string) => {
    deleteToDo({ variables: { _eq: id } });
  };
  // ---------- restoreToday ----------
  const [restoreToday] = useRestoreTodayMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreTodayHandler = (id: string) => {
    restoreToday({ variables: { _eq: id } });
  };
  // ---------- restoreNotToday ----------
  const [restoreNotToday] = useRestoreNotTodayMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreNotTodayHandler = (id: string) => {
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
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <ArchiveTodosCollection
        todos={data.todos}
        onPress={deleteToDoHandler}
        onRestoreToday={restoreTodayHandler}
        onRestoreNotToday={restoreNotTodayHandler}
      />
    </Container>
  );
};
