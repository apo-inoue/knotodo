import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { TodayTodosSingle } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';

type TodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>)[];
  onPress: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodayTodosSingle todo={item} onPress={onPress} />}
      />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
