import React from 'react';
import { Text, View } from 'react-native';
import { Container, Loader } from '../../ui';
import { useGetAllTodosQuery } from '../../types/graphql';
import { TodosCollection } from '../2templates/TodosCollection';
import { FAB } from '../../ui';
import { Box } from '../../ui/layout/Box';
import { Touchable } from '../../ui/button/Touchable';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { RoundButton } from '../../ui/button/RoundButton';
import { ErrorMessage } from '../1standalone/ErrorMessage';

export const TodayTodos = () => {
  const { loading, error, data } = useGetAllTodosQuery();
  const navigation = useNavigation();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

  return (
    <Container>
      <TodosCollection todos={data.todo} />

      <Box mb={4}>
        <FAB onPress={() => navigation.navigate('NewTodo')}>
          <Text>T</Text>
        </FAB>
      </Box>
      <RoundButton onPress={() => navigation.navigate('NewTodo')} />
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </Container>
  );
};
