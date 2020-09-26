import React, { FC, useState } from 'react';
import { Box, PrimaryButton, SlideOutView } from '../../ui';
import { Todos } from '../../types/graphql';
import { View } from 'react-native';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;

type SwipeTodoType = {
  todo: TodoType;
  onPress: (id: string) => void;
  btnText: string;
};

export const SwipeTodo: FC<SwipeTodoType> = ({ todo, onPress, btnText }) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressHandler = () => {
    onPress(todo.id);
    setIsPressed(true);
  };

  return (
    <SlideOutView isOut={isPressed}>
      <Box flexDirection="row">
        <PrimaryButton
          variant="contained"
          text={btnText}
          onPress={onPressHandler}
        />
      </Box>
    </SlideOutView>
  );
};
