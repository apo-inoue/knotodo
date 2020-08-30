import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { ArchiveTodosSingle } from '../2single';
import { useTheme } from 'styled-components';

type ArchiveTodosType = {
  todos: ({ __typename: 'todos' } & Pick<Todos, 'title' | 'id' | 'isToday' | 'isCompleted'>)[];
  onPress: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({ todos, onPress }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ArchiveTodosSingle todo={item} onPress={onPress} />}
    />
  );
};
