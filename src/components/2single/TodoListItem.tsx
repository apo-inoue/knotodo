import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { Touchable, PrimaryButton, Box, Text, SlideUpView } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >;
  buttonAction: {
    label: string;
    onPress: (id: string) => void;
  };
};

export const TodoListItem: FC<TodoListItem> = ({ todo, buttonAction }) => {
  const navigation = useNavigation();
  const params = todo;

  return (
    <SlideUpView>
      <Box flexDirection="row" height={48}>
        <Box flex="1 1" justifyContent="center">
          <Touchable
            p={0}
            justifyContent="center"
            onPress={() => navigation.navigate(STACK_ROUTE_NAMES.詳細, params)}>
            <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
              {todo.title}
            </Text>
          </Touchable>
        </Box>
        <Box
          width={100}
          flexDirection="row"
          my="auto"
          justifyContent="flex-end">
          <PrimaryButton
            variant="outlined"
            onPress={() => buttonAction.onPress(todo.id)}
            text={buttonAction.label}
          />
        </Box>
      </Box>
    </SlideUpView>
  );
};
