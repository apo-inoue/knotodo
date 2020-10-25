import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { AddFab } from '../1standalone/AddFab';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { FutureTodoSwipe } from './FutureTodoSwipe';
import { useTodoCtx } from '../../containers/contexts/todo';
import { useScrollable } from '../../helpers/useScrollable';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'is_today' | 'urgency' | 'workload' | 'category_id'
>;
type FutureTodosProps = {
  todos: TodoType[];
  onPress: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

export const FutureTodos: FC<FutureTodosProps> = ({
  todos,
  onPress,
  onComplete,
  onDelete,
}) => {
  const navigation = useNavigation();
  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler(false);
    navigation.navigate(STACK_ROUTE_NAMES.新規作成);
  };

  const {
    isScrollable,
    enableScrollHandler,
    disableScrollHandler,
  } = useScrollable();

  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
    const isLastRow = todos.length - 1 === rowData.index;
    const todo = rowData.item;
    return (
      <Box>
        <FutureTodoSwipe
          todo={todo}
          onPress={onPress}
          onComplete={onComplete}
          onDelete={onDelete}
          disableScrollHandler={disableScrollHandler}
          enableScrollHandler={enableScrollHandler}
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
          keyExtractor={(item: TodoType) => `${item.id}`}
          renderItem={renderItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          scrollEnabled={isScrollable}
        />
      </Box>
      <AddFab onPress={mountAndNavigateHandler} />
    </>
  );
};
