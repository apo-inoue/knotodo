import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { PastTodoSwipe } from './PastTodoSwipe';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { PastTodosChronological } from './PastTodosChronological';
import { useScrollable } from '../../helpers/useScrollable';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  | 'id'
  | 'title'
  | 'urgency'
  | 'workload'
  | 'is_today'
  | 'category_id'
  | 'completed_at'
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
  const {
    sort: { isDefault },
  } = useSortFilterCtx();
  const {
    isScrollable,
    enableScrollHandler,
    disableScrollHandler,
  } = useScrollable();

  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
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
      </Box>
    );
  };

  if (isDefault) {
    return (
      <Box mt={2} width="100%">
        <PastTodosChronological
          todos={todos}
          renderItem={renderItem}
          isScrollable={isScrollable}
        />
      </Box>
    );
  } else {
    return (
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
    );
  }
};
