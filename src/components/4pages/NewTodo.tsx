import React, { FC, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import {
  useInsertTodoMutation,
  useCategoriesLazyQuery,
} from '../../types/graphql';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { NewTodoCollection } from '../3collection';
import { useTodoCtx } from '../../containers/contexts/todo';

export const NewTodo: FC = () => {
  const navigation = useNavigation();
  const [fetchCategories, { data, loading, error }] = useCategoriesLazyQuery();

  useFocusEffect(useCallback(() => fetchCategories(), [fetchCategories]));

  const {
    newTodo: {
      state: { title, urgency, workload, is_today, category_id },
    },
  } = useTodoCtx();

  // NOTE: categoryPickerにタッチがない場合の処理
  const categoryId =
    category_id !== 0 ? category_id : data?.categories[0].id ?? 0;

  // ---------- insert ----------
  const [insertTodo] = useInsertTodoMutation({
    onCompleted: () => navigation.goBack(),
  });
  const insertTodoHandler = () => {
    insertTodo({
      variables: {
        title,
        urgency,
        workload,
        is_today,
        category_id: categoryId,
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
