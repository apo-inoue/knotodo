import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { Container, PrimaryButton, Loader } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../containers/theme/provider';
import { useGetAllTodosQuery, Todo } from '../../types/graphql';
import { TodaySingle } from '../2single/Todo';

type TodayCollectionType = {
  todos: ({ __typename?: 'todo' | undefined } & Pick<Todo, 'title' | 'id' | 'isToday'>)[];
};

export const TodayCollection: FC<TodayCollectionType> = ({ todos }) => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  return (
    <>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodaySingle todo={item} />}
      />
      <PrimaryButton onPress={() => navigation.goBack()} title="GoHome" color={theme.colors.main} />
    </>
  );
};
