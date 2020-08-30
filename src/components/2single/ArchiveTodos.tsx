import React, { FC } from 'react';
import { Todos, Exact, DeleteToDoMutation, String_Comparison_Exp } from '../../types/graphql';
import { Touchable, Text, PrimaryButton } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Box } from '../../ui/layout/Box';

type ArchiveTodos = {
  todo: { __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>;
  onPress: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodos> = ({ todo, onPress }) => {
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
