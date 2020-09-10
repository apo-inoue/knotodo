import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../ui';

type TodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mt={2} width="100%">
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          style={{ width: '100%' }}
          renderItem={({ item, index }) => (
            <TodoListItem
              todo={item}
              index={index}
              buttonAction={{ onPress, label: 'Complete' }}
            />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
