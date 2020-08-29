import React, { FC } from 'react';
import { Todo } from '../../types/graphql';
import { Touchable, Text, Card } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Box } from '../../ui/layout/Box';

type TodoSingleType = {
  todo: { __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>;
};

export const TodoSingle: FC<TodoSingleType> = ({ todo }) => {
  const navigation = useNavigation();
  const params = todo;
  const theme = useTheme();

  return (
    <Box m={2}>
      <Touchable onPress={() => navigation.navigate('TodoDetails', params)}>
        <Box
          width="100%"
          p={2}
          alignItems="center"
          justifyContent="center"
          border={theme.colors.main}>
          <Text>{todo.title}</Text>
        </Box>
      </Touchable>
    </Box>
  );
};
