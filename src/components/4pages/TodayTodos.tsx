import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { Container, Loader } from '../../ui';
import { useGetAllTodosQuery } from '../../types/graphql';
import { TodosCollection } from '../3collection/TodosCollection';
import { PrimaryButton } from '../../ui';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { RoundButton } from '../../ui/button/RoundButton';
import { ErrorMessage } from '../1standalone/ErrorMessage';

export const TodayTodos = () => {
  const { loading, error, data } = useGetAllTodosQuery();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <PrimaryButton onPress={() => {}} title="Update count" />,
      headerTitle: 'hoge',
    });
  }, [navigation]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

  return (
    <Container>
      <TodosCollection todos={data.todo} />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </Container>
  );
};
