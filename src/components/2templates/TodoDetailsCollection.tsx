import React, { FC } from 'react';
import { PrimaryButton, Text } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

type TodoDetailsCollectionProps = {
  todo: any;
};

export const TodoDetailsCollection: FC<TodoDetailsCollectionProps> = ({ todo }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const todos = {
    id: 1,
    isToday: true,
  };

  return (
    <>
      <Text>{todo.title}</Text>
    </>
  );
};
