import React, { FC, useState } from 'react';
import { Box, PrimaryButton, SlideOutView } from '../../ui';
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
  const [isPressed, setIsPressed] = useState(false);
  const onDeleteHandler = () => {
    onDelete(todo.id);
    setIsPressed(true);
  };
  const onPressHandler = () => {
    onPress(todo.id);
    setIsPressed(true);
  };

  return (
    <SlideOutView isOut={isPressed}>
      <Box flexDirection="row">
        <PrimaryButton
          variant="outlined"
          text="Today"
          onPress={onDeleteHandler}
        />
        <PrimaryButton
          variant="contained"
          text={btnText}
          onPress={onPressHandler}
        />
      </Box>
    </SlideOutView>
  );
};
