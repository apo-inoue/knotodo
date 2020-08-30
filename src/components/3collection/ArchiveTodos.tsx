import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Todos, Exact, DeleteToDoMutation, String_Comparison_Exp } from '../../types/graphql';
import { ArchiveTodosSingle } from '../2single';
import { useTheme } from 'styled-components';
import { MutationFunctionOptions } from '@apollo/client';
import { deleteTodoType } from '../4pages/ArchiveTodos';

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
