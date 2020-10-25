import React, { FC, useState } from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { TodoListItem, SwipeTodo } from '../2single';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'
>;
type TodayTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: number) => void;
  onPostpone: (id: number) => void;
  onDelete: (id: number) => void;
  disableScrollHandler: () => void;
  enableScrollHandler: () => void;
};

export const TodayTodoSwipe: FC<TodayTodoSwipeProps> = ({
  todo,
  onPress,
  onPostpone,
  onDelete,
  disableScrollHandler,
  enableScrollHandler,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressEffectHandler = () => {
    onPress(todo.id);
    setIsPressed(true);
  };
  const onPostponeEffectHandler = () => {
    onPostpone(todo.id);
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
              onPress={onPostponeEffectHandler}
              btnText="リスケ"
              onDelete={onDelete}
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={todo}
            buttonAction={{ onPress: onPressEffectHandler, label: '完了' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
