import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { TodayTodosSingle } from '../2single';

type TodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>)[];
  onPress: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todos, onPress }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodayTodosSingle todo={item} onPress={onPress} />}
    />
  );
};
