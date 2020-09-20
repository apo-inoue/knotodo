import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { Box } from '../../ui';

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
        <FlatList
          data={todos}
          style={{ width: '100%' }}
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
