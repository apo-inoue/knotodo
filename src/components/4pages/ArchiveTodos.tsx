import React, { useCallback } from 'react';
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

export const ArchiveTodos = () => {
  const { loading, error, data, refetch } = useCompletedTodosQuery();
  const [
    deleteToDo,
    { loading: mutationLoading, error: mutationError },
  ] = useDeleteToDoMutation({
    refetchQueries: [{ query: COMPLETED_TODOS }],
  });
  const deleteToDoHandler = (id: string) => {
    deleteToDo({ variables: { _eq: id } });
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (loading || mutationLoading) return <Loader />;
  if (error || mutationError) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  console.log(data, 'archive');
  console.log(error, mutationError, 'ArchiveError');

  return (
    <Container>
      <ArchiveTodosCollection todos={data.todos} onPress={deleteToDoHandler} />
    </Container>
  );
};
