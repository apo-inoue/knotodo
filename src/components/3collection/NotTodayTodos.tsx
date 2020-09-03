import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { NotTodayTodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../ui';

type NotTodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
};

export const NotTodayTodos: FC<NotTodayTodos> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mt={4} width="100%">
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          style={{ width: '100%' }}
          renderItem={({ item }) => (
            <NotTodayTodoListItem todo={item} onPress={onPress} />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
