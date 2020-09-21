import React, { FC } from 'react';
import { Box, Divider, Text, Touchable } from '../../ui';
import { Todos } from '../../types/graphql';
import { TodoWorkload } from '../2single';
import { PrimaryButton } from '../../ui/button/StyledButtons';
import { useNavigation } from '@react-navigation/native';

type TodoDetailsProps = {
  todo: Todos;
};

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
          onPress={() => navigation.navigate('EditTodo')}
          text="編集"
        />
      </Box>
    </>
  );
};
