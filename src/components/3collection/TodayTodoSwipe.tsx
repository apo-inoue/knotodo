import React, { FC, useState } from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { TodoListItem, SwipeTodo } from '../2single';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'urgency' | 'workload' | 'isToday' | 'isCompleted'
>;
type TodayTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onPostpone: (id: string) => void;
};

export const TodayTodoSwipe: FC<TodayTodoSwipeProps> = ({
  todo,
  onPress,
  onPostpone,
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
      <SwipeRow rightOpenValue={-100}>
        <Box pl={4} flexDirection="row" flex={1} alignItems="center">
          <Box flexDirection="column" alignItems="flex-end" width="100%">
            <SwipeTodo
              todo={todo}
              onPress={onPostponeEffectHandler}
              btnText="NotToday"
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={todo}
            buttonAction={{ onPress: onPressEffectHandler, label: 'Complete' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
