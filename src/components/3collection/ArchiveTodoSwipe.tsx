import React, { FC, useState } from 'react';
import { TodoListItem, SwipeArchiveTodo } from '../2single';
import { Todos } from '../../types/graphql';
import { Box, SlideUpOutView } from '../../ui';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Text } from '../../ui/typography/Text';
import { Touchable } from '../../ui/button/Touchable';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;
type ArchiveTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onRestoreToday: (id: string) => void;
  onRestoreNotToday: (id: string) => void;
};

export const ArchiveTodoSwipe: FC<ArchiveTodoSwipeProps> = ({
  todo,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
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
  const onPressToggler = () => {
    setIsPressed(!isPressed);
  };
  console.log(isPressed, 'press');

  return (
    <SlideUpOutView isOut={isPressed}>
      <SwipeRow rightOpenValue={-200}>
        <Box
          pl={4}
          flexDirection="row"
          justifyContent="space-between"
          flex={1}
          alignItems="center">
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
            buttonAction={{ onPress: onPressEffectHandler, label: 'Delete' }}
          />
        </Box>
      </SwipeRow>
    </SlideUpOutView>
  );
};
