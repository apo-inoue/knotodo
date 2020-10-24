import React, { FC, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { PastTodoSwipe } from './PastTodoSwipe';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'
>;
type PastTodosProps = {
  todos: TodoType[];
  onPress: (id: number) => void;
  onRestoreToday: (id: number) => void;
  onRestoreNotToday: (id: number) => void;
};

export const PastTodos: FC<PastTodosProps> = ({
  todos,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const [isScrollable, setIsScrollable] = useState(true);
  const enableScrollHandler = () => {
    setIsScrollable(true);
  };
  const disableScrollHandler = () => {
    setIsScrollable(false);
  };

  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
    const isLastRow = todos.length - 1 === rowData.index;
    const todo = rowData.item;
    return (
      <Box>
        <PastTodoSwipe
          todo={todo}
          onPress={onPress}
          onRestoreToday={onRestoreToday}
          onRestoreNotToday={onRestoreNotToday}
          enableScrollHandler={enableScrollHandler}
          disableScrollHandler={disableScrollHandler}
        />
        <Divider width="100%" />
        {isLastRow && <Box mb={5} />}
      </Box>
    );
  };

  return (
    <>
      <Box mt={2} width="100%">
        <SwipeListView<TodoType>
          data={todos}
          keyExtractor={(item: TodoType) => `${item.id}`}
          renderItem={renderItem}
          leftOpenValue={75}
          rightOpenValue={-250}
          scrollEnabled={isScrollable}
        />
      </Box>
    </>
  );
};
