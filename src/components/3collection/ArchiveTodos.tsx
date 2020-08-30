import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { ArchiveTodoListItem } from '../2single';
import { useTheme } from 'styled-components';
import { AddFab } from '../1standalone/AddFab';

type ArchiveTodosType = {
  todos: ({ __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>)[];
  onPress: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ArchiveTodoListItem todo={item} onPress={onPress} />}
      />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
