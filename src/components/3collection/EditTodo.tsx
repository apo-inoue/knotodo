import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton, Box, UnderlinedTextForm, Text } from '../../ui';
import { Categories, UpdateTodoMutationVariables } from '../../types/graphql';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';

import { useTodoCtx } from '../../containers/contexts/todo';
import { useTheme } from 'styled-components';

type EditTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({
    id,
    title,
    urgency,
    workload,
  }: UpdateTodoMutationVariables) => void;
};

export const EditTodo: FC<EditTodoProps> = ({ categories, onPress }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [error, setError] = useState<string>('');
  const {
    editTodo: {
      state: { id, title, urgency, workload, category_id },
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
      categorySelectHandler,
    },
  } = useTodoCtx();
  const category: string = category_id === '' ? categories[0].id : category_id;
  const updateAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress({
        id: id,
        title: title,
        urgency: urgency,
        workload: workload,
        category_id: category,
      });
      navigation.goBack();
    }
  };

  return (
    <>
      <Box width="80%">
        <UnderlinedTextForm
          placeholder="タイトル"
          err={error}
          onChangeText={titleInputHandler}
          value={title}
        />
        <Text color={theme.colors.danger}>{error}</Text>
      </Box>
      <Box mt={3}>
        <TodoWorkloadSelect
          workload={workload}
          workloadSelectHandler={workloadSelectHandler}
        />
      </Box>
      <Box mt={3}>
        <TodoUrgencySelect
          urgency={urgency}
          urgencySelectHandler={urgencySelectHandler}
        />
      </Box>
      <Box>
        <CategoriesPicker
          categories={categories}
          category_id={category_id}
          categorySelectHandler={categorySelectHandler}
        />
      </Box>
      <Box mt={4} flexDirection="row">
        <PrimaryButton
          variant="outlined"
          width="30%"
          stretch
          onPress={navigation.goBack}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          width="30%"
          stretch
          text="保存"
          onPress={updateAndNavigateHandler}
        />
      </Box>
    </>
  );
};
