import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { Container, PrimaryButton, Loader } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../containers/theme/provider';
import { useGetAllTodosQuery } from '../../types/graphql';
import { TodayCollection } from '../3collection/Todos';

export const TodayTodos: FC = () => {
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;
  if (error) return <Loader />;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

  const notNullData = data.todo;

  return (
    <Container>
      <TodayCollection todos={data.todo} />
    </Container>
  );
};
