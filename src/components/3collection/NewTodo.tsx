import React, { FC } from 'react';
import { PrimaryButton, Box } from '../../ui';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';
import { useNavigation } from '@react-navigation/native';
import { UnderlinedTextForm } from '../../ui/input/TextForm';

type NewTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({ title, urgency, workload }: InsertToDoMutationVariables) => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const navigation = useNavigation();
  const {
    newTodo: {
      state: { title, urgency, workload },
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
    },
  } = useTodoCtx();

  return (
    <>
      <Box width="80%">
        <UnderlinedTextForm
          placeholder="タイトル"
          error={null}
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
          onPress={navigation.goBack}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          width="30%"
          stretch
          text="追加"
          onPress={() => onPress({ title, urgency, workload })}
        />
      </Box>
    </>
  );
};
