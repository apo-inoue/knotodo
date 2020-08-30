import React, { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useNotTodayTodosQuery, useSetTodayTodoMutation } from '../../types/graphql';
import { Container } from '../../ui';
import { ErrorMessage } from '../1standalone';
import { NotTodayTodosCollection } from '../3collection';
import { AddFab } from '../1standalone/AddFab';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { ScreenLoader } from '../../ui/utils/Loader';

export const NotTodayTodos = () => {
  const navigation = useNavigation();
  const { loading, error, data, refetch } = useNotTodayTodosQuery();
  const [setToday, { loading: mutationLoading, error: mutationError }] = useSetTodayTodoMutation();
  const setTodayHandler = async (id: string) => {
    await setToday({ variables: { _eq: id } });
    refetch();
  };

  useFocusEffect(
    useCallback(() => {
      return () => refetch();
    }, []),
  );

  if (loading || mutationLoading) return <ScreenLoader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  console.log(data, 'notToday');
  console.log(error, mutationError, 'notTodayError');

  return (
    <Container>
      <NotTodayTodosCollection todos={data.todos} onPress={setTodayHandler} />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </Container>
  );
};
