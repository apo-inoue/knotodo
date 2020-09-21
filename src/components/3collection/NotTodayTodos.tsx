import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

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
      <Box mt={2} width="100%">
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TodoListItem
              todo={item}
              index={index}
              buttonAction={{ onPress, label: 'today' }}
            />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
