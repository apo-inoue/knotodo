import React, { FC, useState } from 'react';
import { TodoListItem } from '../2single';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { SwipeRow } from 'react-native-swipe-list-view';
import { SwipeTodo } from '../2single/SwipeTodo';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'
>;

type FutureTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  disableScrollHandler: () => void;
  enableScrollHandler: () => void;
};

export const FutureTodoSwipe: FC<FutureTodoSwipeProps> = ({
  todo,
  onPress,
  onComplete,
  onDelete,
  disableScrollHandler,
  enableScrollHandler,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressEffectHandler = () => {
    onPress(todo.id);
    setIsPressed(true);
  };
  const onCompleteEffectHandler = () => {
    onComplete(todo.id);
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
            <SwipeTodo
              todo={todo}
              onPress={onCompleteEffectHandler}
              btnText="完了"
              onDelete={onDelete}
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={todo}
            buttonAction={{ onPress: onPressEffectHandler, label: '今日' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
