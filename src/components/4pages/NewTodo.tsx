import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import {
  InsertToDoMutationVariables,
  useAllCategoryQuery,
  useInsertToDoMutation,
} from '../../types/graphql';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { NewTodoCollection } from '../3collection';
import { useNavigation } from '@react-navigation/native';

export const NewTodo: FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useAllCategoryQuery();
  const [insertTodo] = useInsertToDoMutation({
    onCompleted: () => navigation.goBack(),
  });
  const insertTodoHandler = ({
    title,
    urgency,
    workload,
    isToday,
    isCompleted,
    category_id,
  }: InsertToDoMutationVariables) => {
    insertTodo({
      variables: {
        title,
        urgency,
        workload,
        isToday,
        isCompleted,
        category_id,
      },
    });
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data?.categories.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container centerContent>
      <NewTodoCollection
        onPress={insertTodoHandler}
        categories={data.categories}
      />
    </Container>
  );
};
