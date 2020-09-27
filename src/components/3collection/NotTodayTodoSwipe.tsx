import React, { FC, useState } from 'react';
import { TodoListItem } from '../2single';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { SwipeRow } from 'react-native-swipe-list-view';
import { SwipeTodo } from '../2single/SwipeTodo';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  | 'title'
  | 'id'
  | 'urgency'
  | 'workload'
  | 'isToday'
  | 'isCompleted'
  | 'category_id'
>;
type NotTodayTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onComplete: (id: string) => void;
};

export const NotTodayTodoSwipe: FC<NotTodayTodoSwipeProps> = ({
  todo,
  onPress,
  onComplete,
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
      <SwipeRow rightOpenValue={-100}>
        <Box pl={4} flexDirection="row" flex={1} alignItems="center">
          <Box flexDirection="column" alignItems="flex-end" width="100%">
            <SwipeTodo
              todo={todo}
              onPress={onCompleteEffectHandler}
              btnText="Complete"
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={todo}
            buttonAction={{ onPress: onPressEffectHandler, label: 'Today' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
