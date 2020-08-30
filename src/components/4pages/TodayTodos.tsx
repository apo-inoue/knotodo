import React, { useCallback } from 'react';
import { Container, ScreenLoader, Text } from '../../ui';
import { useTodayTodosQuery, useCompleteToDoMutation } from '../../types/graphql';
import { TodayTodosCollection } from '../3collection';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { TODAY_TODOS } from '../../graphql/query/todos';

export const TodayTodos = () => {
  const { loading, error, data, refetch } = useTodayTodosQuery();
  const navigation = useNavigation();
  const [
    completeTodo,
    { loading: mutationLoading, error: mutationError },
  ] = useCompleteToDoMutation({ refetchQueries: [{ query: TODAY_TODOS }] });
  const completeTodoHandler = (id: string) => {
    completeTodo({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      return () => refetch();
    }, []),
  );

  if (loading || mutationLoading) return <ScreenLoader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  console.log(data, 'today');
  console.log(error, mutationError, 'todayError');

  return (
    <Container>
      <TodayTodosCollection todos={data.todos} onPress={completeTodoHandler} />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </Container>
  );
};
