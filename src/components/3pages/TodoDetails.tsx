import React from 'react';
import { Container } from '../../ui/layout/Container';
import { Text } from '../../ui/typography/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TodoDetailsCollection } from '../2templates/TodoDetailsCollection';
import { useTheme } from 'styled-components';
import { PrimaryButton } from '../../ui/button/StyledButtons';

export const TodoDetails = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const route = useRoute();
  const todo = route.params ?? undefined;

  if (!todo) {
    <Container>
      <Text color={theme.colors.danger}>unhandled error occur!!</Text>
    </Container>;
  }

  return (
    <Container>
      <TodoDetailsCollection todo={todo} />
      <PrimaryButton onPress={navigation.goBack} title="GoHome" color={theme.colors.main} />
    </Container>
  );
};
