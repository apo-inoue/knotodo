import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { PrimaryButton } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../containers/theme/provider';
import { Todo } from '../../types/graphql';

type TodayCollectionType = {
  todos: ({ __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>)[];
};

export const Todos: FC<TodayCollectionType> = ({ todos }) => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodoSingle todo={item} />}
      />
      <PrimaryButton onPress={() => navigation.goBack()} title="GoHome" color={theme.colors.main} />
    </>
  );
};

type TodoSingleType = {
  todo: { __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>;
};

const TodoSingle: FC<TodoSingleType> = ({ todo }) => {
  return <Text key={todo.id}>{todo.title}</Text>;
};
