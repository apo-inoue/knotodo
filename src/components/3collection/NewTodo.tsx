import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton, Box, UnderlinedTextForm } from '../../ui';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';
import { useTodoCtx } from '../../containers/contexts/todo';

type NewTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({ title, urgency, workload }: InsertToDoMutationVariables) => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const navigation = useNavigation();
  const [error, setError] = useState<string>('');
  const {
    newTodo: {
      state: { title, urgency, workload, isToday, isCompleted },
      todoClearHandler,
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
    },
  } = useTodoCtx();
  const insertAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress({ title, urgency, workload, isToday, isCompleted });
      navigation.goBack();
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
        <CategoriesPicker categories={categories} />
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
