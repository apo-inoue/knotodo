import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { Box, FlatList } from '../../ui';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;
type ArchiveTodosType = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mt={2} width="100%">
        <FlatList<TodoType>
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TodoListItem
              todo={item}
              index={index}
              buttonAction={{ onPress, label: 'delete' }}
            />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
