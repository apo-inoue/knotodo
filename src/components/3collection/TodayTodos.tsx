import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone';
import { useNavigation } from '@react-navigation/native';
import { Box, FlatList, Divider } from '../../ui';
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
            <Box key={item.id} width="100%">
              <TodoListItem
                todo={item}
                buttonAction={{ onPress, label: 'Complete' }}
              />
              <Divider />
              {/* // NOTE: FABが重なって押しにくくなるのを避けるため余白を追加する */}
              {todos.length - 1 === index && <Box mb={5} />}
            </Box>
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
