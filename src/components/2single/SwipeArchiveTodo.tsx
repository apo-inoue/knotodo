import React, { FC } from 'react';
import { Box, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'is_today'
>;

type SwipeArchiveTodoType = {
  todo: TodoType;
  onRestoreToday: (id: number) => void;
  onRestoreNotToday: (id: number) => void;
};

export const SwipeArchiveTodo: FC<SwipeArchiveTodoType> = ({
  todo,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const onRestoreTodayHandler = () => {
    onRestoreToday(todo.id);
  };
  const onRestoreNotTodayHandler = () => {
    onRestoreNotToday(todo.id);
  };

  return (
    <Box flexDirection="row">
      <PrimaryButton
        variant="outlined"
        text="今日"
        onPress={onRestoreTodayHandler}
      />
      <PrimaryButton
        variant="contained"
        text="リスケ"
        onPress={onRestoreNotTodayHandler}
      />
    </Box>
  );
};
