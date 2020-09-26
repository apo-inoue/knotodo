import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import { NewTodoCollection } from '../3collection';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { InsertToDoMutationVariables } from '../../types/graphql';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  useAllCategoryQuery,
  useInsertToDoMutation,
} from '../../types/graphql';

export const NewTodo: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data, loading, error } = useAllCategoryQuery();
  const [insertTodo] = useInsertToDoMutation();
  const insertTodoHandler = ({
    title,
    urgency,
    workload,
    isToday,
    isCompleted,
  }: InsertToDoMutationVariables) => {
    insertTodo({
      variables: {
        title,
        urgency,
        workload,
        isToday,
        isCompleted,
      },
    });
    navigation.goBack();
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
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
