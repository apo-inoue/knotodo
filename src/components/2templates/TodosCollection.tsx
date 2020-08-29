import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { PrimaryButton } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { Todo } from '../../types/graphql';
import { TodoSingle } from './TodosSingle';
import { useTheme } from 'styled-components';

type TodayCollectionType = {
  todos: ({ __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>)[];
};

export const TodosCollection: FC<TodayCollectionType> = ({ todos }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodoSingle todo={item} />}
      />
      <PrimaryButton onPress={navigation.goBack} title="GoHome" color={theme.colors.main} />
    </>
  );
};
