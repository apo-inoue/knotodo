import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import { EditTodoCollection } from '../3collection';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { useNavigation } from '@react-navigation/native';
import {
  UpdateTodoMutationVariables,
  useUpdateTodoMutation,
  useAllCategoryQuery,
} from '../../types/graphql';

export const EditTodo: FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useAllCategoryQuery();
  const [updateTodo] = useUpdateTodoMutation();
  const updateTodoHandler = ({
    title,
    urgency,
    workload,
    category_id,
  }: UpdateTodoMutationVariables) => {
    updateTodo({
      variables: {
        title,
        urgency,
        workload,
        category_id,
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
      <EditTodoCollection
        onPress={updateTodoHandler}
        categories={data.categories}
      />
    </Container>
  );
};
