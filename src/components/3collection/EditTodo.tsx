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

type EditTodoProps = {
  categories: ({ __typename?: 'categories' } & Pick<
    Categories,
    'id' | 'title'
  >)[];
  onPress: () => void;
};

export const EditTodo: FC<EditTodoProps> = ({ categories, onPress }) => {
  const navigation = useNavigation();
  const [error, setError] = useState<string>('');
  const {
    editTodo: {
      state: { title, urgency, workload, category_id },
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
      categorySelectHandler,
    },
  } = useTodoCtx();
  const updateAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress();
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
