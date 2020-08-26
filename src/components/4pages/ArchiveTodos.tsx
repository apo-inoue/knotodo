import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, Loader } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../containers/theme/provider';
import { useGetAllTodosQuery } from '../../types/graphql';
import { PrimaryButton } from '../../ui';

export const ArchiveTodos = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>Todoはまだ登録されていません。</Text>;

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
