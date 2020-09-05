import React from 'react';
import { Container } from '../../ui/layout/Container';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TodoDetailsCollection } from '../3collection';
import { PrimaryButton } from '../../ui/button/StyledButtons';
import { ErrorMessage } from '../1standalone';
import { Todos } from '../../types/graphql';
import { Box } from '../../ui/layout/Box';

export const TodoDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const todo = (route.params as Todos) ?? undefined;

  if (!todo) return <ErrorMessage />;

  return (
    <Container centerContent>
      <TodoDetailsCollection todo={todo} />
      <Box mt={4}>
        <PrimaryButton
          variant="outlined"
          onPress={navigation.goBack}
          text="GoHome"
        />
      </Box>
    </Container>
  );
};
