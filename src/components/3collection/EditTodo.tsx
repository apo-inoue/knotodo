import React, { FC } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import { TodoTitle, CategoriesPicker, Urgency, WorkloadEdit } from '../2single';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import { useTodoCtx } from '../../containers/contexts/todo';
import { Box } from '../../ui/layout/Box';
import { TodoTitleEdit } from '../2single/TodoTitle';
import { useNavigation } from '@react-navigation/native';

type EditTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({ title, urgency, workload }: InsertToDoMutationVariables) => void;
};

export const EditTodo: FC<EditTodoProps> = ({ categories, onPress }) => {
  const navigation = useNavigation();
  const {
    state: { title, urgency, workload },
  } = useTodoCtx();

  return (
    <>
      <Box>
        <TodoTitleEdit />
      </Box>
      <Box mt={3}>
        <WorkloadEdit />
      </Box>
      <Box mt={3}>
        <Urgency />
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
