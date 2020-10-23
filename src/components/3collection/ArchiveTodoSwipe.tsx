import React, { FC, useState } from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { TodoListItem, SwipeArchiveTodo } from '../2single';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'
>;
type ArchiveTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: number) => void;
  onRestoreToday: (id: number) => void;
  onRestoreNotToday: (id: number) => void;
  enableScrollHandler: () => void;
  disableScrollHandler: () => void;
};

export const ArchiveTodoSwipe: FC<ArchiveTodoSwipeProps> = ({
  todo,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
  enableScrollHandler,
  disableScrollHandler,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressEffectHandler = () => {
    onPress(todo.id);
    setIsPressed(true);
  };
  const onRestoreTodayEffectHandler = () => {
    onRestoreToday(todo.id);
    setIsPressed(true);
  };
  const onRestoreNotTodayEffectHandler = () => {
    onRestoreNotToday(todo.id);
    setIsPressed(true);
  };

  return (
    <SlideUpOutView isOut={isPressed}>
      <SwipeRow
        rightOpenValue={-200}
        onRowOpen={disableScrollHandler}
        onRowDidClose={enableScrollHandler}>
        <Box pl={4} flexDirection="row" flex={1} alignItems="center">
          <Box flexDirection="column" alignItems="flex-end" width="100%">
            <SwipeArchiveTodo
              todo={todo}
              onRestoreToday={onRestoreTodayEffectHandler}
              onRestoreNotToday={onRestoreNotTodayEffectHandler}
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={todo}
            buttonAction={{ onPress: onPressEffectHandler, label: '削除' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
