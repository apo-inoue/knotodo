import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone';
import { Box, FlatList } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

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
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
