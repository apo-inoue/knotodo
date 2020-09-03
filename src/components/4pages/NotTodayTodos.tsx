import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  useNotTodayTodosQuery,
  useSetTodayTodoMutation,
} from '../../types/graphql';
import { Container } from '../../ui';
import { ErrorMessage } from '../1standalone';
import { NotTodayTodosCollection } from '../3collection';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { ScreenLoader } from '../../ui/utils/Loader';
import { NOT_TODAY_TODOS } from '../../graphql/query/todos';

export const NotTodayTodos = () => {
  const { loading, error, data, refetch } = useNotTodayTodosQuery();
  const [
    setToday,
    { loading: mutationLoading, error: mutationError },
  ] = useSetTodayTodoMutation({
    refetchQueries: [{ query: NOT_TODAY_TODOS }],
  });
  const setTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading || mutationLoading) return <ScreenLoader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  console.log(data, 'notToday');
  console.log(error, mutationError, 'notTodayError');

  return (
    <Container>
      <NotTodayTodosCollection todos={data.todos} onPress={setTodayHandler} />
    </Container>
  );
};
