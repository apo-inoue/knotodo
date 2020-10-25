import React, { FC, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import { EditTodoCollection } from '../3collection';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import {
  useUpdateTodoMutation,
  useCategoriesLazyQuery,
} from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';

export const EditTodo: FC = () => {
  const navigation = useNavigation();
  const [fetchCategories, { data, loading, error }] = useCategoriesLazyQuery();
  const {
    editTodo: {
      state: { id, title, urgency, workload, category_id },
    },
  } = useTodoCtx();

  useFocusEffect(useCallback(() => fetchCategories(), [fetchCategories]));

  // ---------- update ----------
  const [updateTodo] = useUpdateTodoMutation({
    onCompleted: () => navigation.goBack(),
  });
  const updateTodoHandler = () => {
    updateTodo({
      variables: {
        id,
        title,
        urgency,
        workload,
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
  if (data.categories.length === 0) {
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
