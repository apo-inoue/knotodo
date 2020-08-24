import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container } from '../ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../containers/theme/provider';
import { useGetAllTodosQuery } from '../types/graphql';
import { PrimaryButton } from '../ui/button/StyledButtons';
import { Loader } from '../ui/utils/Loader';

export const TodayTodos = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;
  if (error) return <Loader />;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

  console.log(data);

  return (
    <Container>
      <FlatList
        data={data.todo}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
      <PrimaryButton onPress={() => navigation.goBack()} title="GoHome" color={theme.colors.main} />
    </Container>
  );
};
