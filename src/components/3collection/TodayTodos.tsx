import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { TodayTodoSwipe } from './TodayTodoSwipe';
import { AddFab } from '../1standalone';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { useTodoCtx } from '../../containers/contexts/todo';

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
type TodayTodos = {
  todos: TodoType[];
  onPress: (id: string) => void;
  onPostpone: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todos, onPress, onPostpone }) => {
  const navigation = useNavigation();
  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: true, isCompleted: false });
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };
  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
    const isLastRow = todos.length - 1 === rowData.index;
    const todo = rowData.item;
    return (
      <Box>
        <TodayTodoSwipe todo={todo} onPress={onPress} onPostpone={onPostpone} />
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
      <AddFab onPress={mountAndNavigateHandler} />
    </>
  );
};
