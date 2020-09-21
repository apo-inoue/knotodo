import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box, FlatList } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;

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
        <FlatList<TodoType>
          data={todos}
          keyExtractor={(item: TodoType) => item.id}
          renderItem={({ item, index }: { item: TodoType; index: number }) => (
            <TodoListItem
              todo={item}
              index={index}
              buttonAction={{ onPress, label: 'Complete' }}
            />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
