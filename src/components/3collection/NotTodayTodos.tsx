import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Todos } from '../../types/graphql';
import { NotTodayTodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';

type NotTodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>)[];
  onPress: (id: string) => void;
};

export const NotTodayTodos: FC<NotTodayTodos> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NotTodayTodoListItem todo={item} onPress={onPress} />}
      />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
