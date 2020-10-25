import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton, Box, UnderlinedTextForm } from '../../ui';
import { Categories } from '../../types/graphql';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';
import { useTodoCtx } from '../../containers/contexts/todo';

type NewTodoProps = {
  categories: ({ __typename?: 'categories' } & Pick<
    Categories,
    'id' | 'title'
  >)[];
  onPress: () => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const navigation = useNavigation();
  const [error, setError] = useState<string>('');
  const {
    newTodo: {
      state: { title, urgency, workload, category_id },
      todoClearHandler,
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
      categorySelectHandler,
    },
  } = useTodoCtx();
  const insertAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress();
    }
  };
  const cancelAndNavigateHandler = () => {
    todoClearHandler();
    navigation.goBack();
  };

  return (
    <>
      <Box width="80%">
        <UnderlinedTextForm
          placeholder="タイトル"
          autoFocus
          err={error}
          onChangeText={titleInputHandler}
          value={title}
        />
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
          onPress={cancelAndNavigateHandler}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          width="30%"
          stretch
          text="追加"
          onPress={insertAndNavigateHandler}
        />
      </Box>
    </>
  );
};
