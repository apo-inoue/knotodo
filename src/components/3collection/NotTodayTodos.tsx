import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { TodoListItem, SwipeTodo } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { ListRenderItemInfo } from 'react-native';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;
type NotTodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
  onComplete: (id: string) => void;
};

export const NotTodayTodos: FC<NotTodayTodos> = ({
  todos,
  onPress,
  onComplete,
}) => {
  const navigation = useNavigation();
  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
    const isLastRow = todos.length - 1 === rowData.index;
    const todoItem = rowData.item;
    return (
      <Box>
        <SwipeRow rightOpenValue={-100}>
          <Box
            pl={4}
            flexDirection="row"
            justifyContent="space-between"
            flex={1}
            alignItems="center">
            <Box flexDirection="column" alignItems="flex-end" width="100%">
              <SwipeTodo
                todo={todoItem}
                onPress={onComplete}
                btnText="Complete"
              />
            </Box>
          </Box>
          <Box width="100%" bg="white">
            <TodoListItem
              todo={todoItem}
              buttonAction={{ onPress, label: 'Today' }}
            />
          </Box>
        </SwipeRow>
        <Divider width="100%" />
        {isLastRow && <Box mb={5} />}
      </Box>
    );
  };

  return (
    <>
      <Box mt={2} width="100%" flex={1}>
        <SwipeListView<TodoType>
          data={todos}
          keyExtractor={(item: TodoType) => item.id}
          renderItem={renderItem}
          leftOpenValue={75}
          rightOpenValue={-150}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
