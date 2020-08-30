import React from 'react';
import { Container } from '../../ui/layout/Container';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TodoDetailsCollection } from '../3collection';
import { PrimaryButton } from '../../ui/button/StyledButtons';
import { ErrorMessage } from '../1standalone';

export const TodoDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const todo = route.params ?? undefined;

  if (!todo) return <ErrorMessage />;

  return (
    <Container>
      <TodoDetailsCollection todo={todo} />
      <PrimaryButton onPress={navigation.goBack} title="GoHome" />
    </Container>
  );
};
