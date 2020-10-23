import React, { FC } from 'react';
import { Box, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  'id' | 'title' | 'is_today'
>;

type SwipeTodoType = {
  todo: TodoType;
  onPress: (id: number) => void;
  btnText: string;
  onDelete: (id: number) => void;
};

export const SwipeTodo: FC<SwipeTodoType> = ({
  todo,
  onPress,
  btnText,
  onDelete,
}) => {
  const onDeleteHandler = () => {
    onDelete(todo.id);
  };
  const onPressHandler = () => {
    onPress(todo.id);
  };

  return (
    <Box flexDirection="row">
      <PrimaryButton variant="outlined" text="削除" onPress={onDeleteHandler} />
      <PrimaryButton
        variant="contained"
        text={btnText}
        onPress={onPressHandler}
      />
    </Box>
  );
};
