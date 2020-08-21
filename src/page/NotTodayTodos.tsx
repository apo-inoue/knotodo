import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../components/theme/CustomThemeProvider';
import { useGetAllTodosQuery } from '../types/graphql';
import {
  Container,
  Box,
  Grid,
  Button,
  Text,
  Flex,
  Card,
  Image,
  TextInput,
  Loader,
  ImageBackground,
  FlatList,
  ScrollView,
  StatusBar,
} from '../components/ui';

export const NotTodayTodos = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();
  const { loading, error, data } = useGetAllTodosQuery();

  if (loading) return <Loader />;

  return (
    <Container>
      {/* <FlatList
        data={data?.todo}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      /> */}
      <Button
        onPress={() => navigation.goBack()}
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
