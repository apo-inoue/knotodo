import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Container, Button } from '../components/ui';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../components/theme/CustomThemeProvider';
import { useGetAllTodosQuery } from '../types/graphql';

export const Today = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <div />;

  return (
    <Container>
      {console.log(data)}
      <FlatList
        data={data.todo}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
      <Button
        onPress={() => navigation.goBack()}
        title="GoHome"
        color={theme.main}
      />
    </Container>
  );
};
