import React, { FC, useCallback } from 'react';
import { Container, Loader } from '../../ui';
import { useFocusEffect } from '@react-navigation/native';
import {
  usePastTodosQuery,
  useDeleteTodoMutation,
  Todos_Order_By,
} from '../../types/graphql';
import { PastTodosCollection } from '../3collection';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { PAST_TODOS } from '../../graphql/query/todos';
import { useRestoreNotTodayMutation } from '../../types/graphql';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { PastTodosQuery, useRestoreTodayMutation } from '../../types/graphql';

export const PastTodos: FC = () => {
  const {
    sort: { sortState, isDefault },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  // TODO: ここのロジックはもっと綺麗にできそう
  const sortStateVariables = isDefault
    ? ([{ completed_at: 'desc' }] as Todos_Order_By[])
    : sortState;
  const categoryIdsVariables = isAll ? null : categoryIds;

  // ---------- query ----------
  const { loading, error, data, refetch } = usePastTodosQuery({
    variables: { order_by: sortStateVariables, _in: categoryIdsVariables },
  });

  // ---------- delete ----------
  const [deleteTodo] = useDeleteTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
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
      const existingTodos = cache.readQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
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
      const existingTodos = cache.readQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
          _in: categoryIdsVariables,
        },
      });
      const newTodos = existingTodos!.todos.filter(
        t => t.id !== updateData!.update_todos!.returning[0].id,
      );
      cache.writeQuery<PastTodosQuery>({
        query: PAST_TODOS,
        variables: {
          order_by: sortStateVariables,
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
      <PastTodosCollection
        todos={data.todos}
        onPress={deleteTodoHandler}
        onRestoreToday={restoreTodayHandler}
        onRestoreNotToday={restoreNotTodayHandler}
      />
    </Container>
  );
};
