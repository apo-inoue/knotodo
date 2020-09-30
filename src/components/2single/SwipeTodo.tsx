import React, { FC } from 'react';
import { Box, PrimaryButton } from '../../ui';
import { Todos } from '../../types/graphql';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;

type SwipeTodoType = {
  todo: TodoType;
  onPress: (id: string) => void;
  btnText: string;
  onDelete: (id: string) => void;
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
      <PrimaryButton
        variant="outlined"
        text="Delete"
        onPress={onDeleteHandler}
      />
      <PrimaryButton
        variant="contained"
        text={btnText}
        onPress={onPressHandler}
      />
    </Box>
  );
};
