import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { Box, Divider, Text, Touchable, PrimaryButton } from '../../ui';
import { TodoWorkload } from '../2single';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

type TodoDetailsProps = {
  todo: Todos;
};

// !This component is no longer used, because we prefer to navigate edit screen directly.
export const TodoDetails: FC<TodoDetailsProps> = ({ todo }) => {
  const { id, title, workload, urgency } = todo;
  const navigation = useNavigation();

  return (
    <>
      <Text>{title}</Text>
      <Divider />
      <TodoWorkload workload={workload} />
      <Touchable variant="outlined" onPress={() => console.log(todo.id)}>
        <Text>{id}</Text>
      </Touchable>
      <Box mt={4}>
        <Text>{urgency}</Text>
      </Box>
      <Box mt={4} flexDirection="row">
        <PrimaryButton
          variant="outlined"
          width="30%"
          stretch
          onPress={navigation.goBack}
          text="戻る"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          width="30%"
          stretch
          onPress={() => navigation.navigate(STACK_ROUTE_NAMES.編集)}
          text="編集"
        />
      </Box>
    </>
  );
};
