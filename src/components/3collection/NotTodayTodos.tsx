import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListRenderItemInfo } from 'react-native';
import { NotTodayTodoSwipe } from './NotTodayTodoSwipe';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  | 'title'
  | 'id'
  | 'isToday'
  | 'isCompleted'
  | 'urgency'
  | 'workload'
  | 'category_id'
>;
type NotTodayTodos = {
  todos: TodoType[];
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
    const todo = rowData.item;
    return (
      <Box>
        <NotTodayTodoSwipe
          todo={todo}
          onPress={onPress}
          onComplete={onComplete}
        />
        <Box width="100%" />
        <Divider width="100%" />
        {/* // NOTE: FABが重なって押しにくくなるのを避けるため余白を追加する */}
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
