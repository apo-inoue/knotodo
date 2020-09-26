import React, { FC, useState, useEffect } from 'react';
import { Box, PrimaryButton, SlideOutView, SlideUpView } from '../../ui';
import { Todos } from '../../types/graphql';
import { useTheme } from 'styled-components';
import { Text } from '../../ui/typography/Text';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;

type SwipeArchiveTodoType = {
  todo: TodoType;
  onRestoreToday: (id: string) => void;
  onRestoreNotToday: (id: string) => void;
};

export const SwipeArchiveTodo: FC<SwipeArchiveTodoType> = ({
  todo,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const onRestoreTodayHandler = () => {
    onRestoreToday(todo.id);
    setIsPressed(true);
  };
  const onRestoreNotTodayHandler = () => {
    onRestoreNotToday(todo.id);
    setIsPressed(true);
  };

  useEffect(() => {
    setIsPressed(false);
  }, []);

  return (
    // <SlideOutView isOut={false}>
    <Box flexDirection="row">
      <PrimaryButton
        variant="outlined"
        text="Today"
        onPress={onRestoreTodayHandler}
      />
      <PrimaryButton
        variant="contained"
        text="NotToday"
        onPress={onRestoreNotTodayHandler}
      />
    </Box>
    // </SlideOutView>
  );
};
