import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Container } from '../components/ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../containers/theme/provider';
import { useGetAllTodosQuery } from '../types/graphql';
import { PrimaryButton } from '../components/ui-group/StyledButtons';
import { Loader } from '../components/ui/Loader';

export const TodayTodos = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;

  console.log(data);

  return (
    <Container>
      <FlatList
        data={data?.todo}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
      <PrimaryButton onPress={() => navigation.goBack()} title="GoHome" color={theme.colors.main} />
    </Container>
  );
};
