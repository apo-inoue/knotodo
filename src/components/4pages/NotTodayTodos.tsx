import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetAllTodosQuery } from '../../types/graphql';
import { Container, Text, Loader } from '../../ui';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { ErrorMessage } from '../1standalone';

export const NotTodayTodos = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

  return (
    <Container>
      <FlatList
        data={data.todo}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
    </Container>
  );
};
