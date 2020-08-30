import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { Container, Loader } from '../../ui';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  useCompletedTodosQuery,
  useDeleteToDoMutation,
  DeleteToDoMutation,
  Exact,
  String_Comparison_Exp,
} from '../../types/graphql';
import { AddFab } from '../1standalone/AddFab';
import { ArchiveTodosCollection } from '../3collection';
import { MutationFunctionOptions } from '@apollo/client';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';

export type deleteTodoType = (
  options?:
    | MutationFunctionOptions<
        DeleteToDoMutation,
        Exact<{
          id?: String_Comparison_Exp | null | undefined;
        }>
      >
    | undefined,
) => Promise<any>;

export const ArchiveTodos = () => {
  const navigation = useNavigation();
  const { loading, error, data, refetch } = useCompletedTodosQuery();
  const [deleteToDo, { loading: mutationLoading, error: mutationError }] = useDeleteToDoMutation();
  const deleteToDoHandler = async (id: string) => {
    await deleteToDo({ variables: { _eq: id } });
    refetch();
  };

  useFocusEffect(
    useCallback(() => {
      return () => refetch();
    }, []),
  );

  if (loading || mutationLoading) return <Loader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  console.log(data, 'archive');
  console.log(error, mutationError, 'ArchiveError');

  return (
    <Container>
      <ArchiveTodosCollection todos={data.todos} onPress={deleteToDoHandler} />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </Container>
  );
};
