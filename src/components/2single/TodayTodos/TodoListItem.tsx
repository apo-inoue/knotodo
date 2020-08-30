import React, { FC } from 'react';
import { Todos } from '../../../types/graphql';
import { Touchable, Text, PrimaryButton, Box } from '../../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

type TodayTodos = {
  todo: { __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>;
  onPress: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todo, onPress }) => {
  const navigation = useNavigation();
  const params = todo;
  const theme = useTheme();

  return (
    <Box flexDirection="column" m={2}>
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
      <PrimaryButton onPress={() => onPress(todo.id)} title="push me!!" />
    </Box>
  );
};
