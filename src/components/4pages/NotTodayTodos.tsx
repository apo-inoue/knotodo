import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../containers/theme/provider';
import { useGetAllTodosQuery } from '../../types/graphql';
import { PrimaryButton } from '../../ui/button/StyledButtons';
import { Container, Box, Grid, Text, Flex, Card, Loader } from '../../ui';
import { FlatList } from 'react-native';

export const NotTodayTodos = () => {
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
      <PrimaryButton
        onPress={() => navigation.navigate('Today')}
        title="GoHome"
        color={theme.colors.main}
      />
      <Box />
      <Grid />
      <Text>hello</Text>
      <Flex />
      <Card />
      {/* <Image />
      <TextInput />
      <Loader />
      <ImageBackground />
      <ScrollView />
      <StatusBar /> */}
    </Container>
  );
};