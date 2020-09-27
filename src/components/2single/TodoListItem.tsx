import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { Touchable, PrimaryButton, Box, Text, SlideUpView } from '../../ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { useTodoCtx } from '../../containers/contexts/todo';
import { TodoState } from '../../containers/types/todo';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted' | 'urgency' | 'workload'
  >;
  buttonAction: {
    label: string;
    onPress: (id: string) => void;
  };
};

export const TodoListItem: FC<TodoListItem> = ({ todo, buttonAction }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    editTodo: { todoMountHandler },
  } = useTodoCtx();
  const isToday = route.name === 'Today' ? true : false;
  const isCompleted = route.name === 'Archive' ? true : false;
  const mountAndNavigateHandler = () => {
    const mountTodo: { id: string } & TodoState = {
      id: todo.id,
      title: todo.title,
      category: '',
      urgency: todo.urgency,
      workload: todo.workload,
      isToday,
      isCompleted,
    };
    todoMountHandler(mountTodo);
    navigation.navigate(STACK_ROUTE_NAMES.編集);
  };

  return (
    <SlideUpView>
      <Box flexDirection="row" height={50}>
        <Box flex="1 1" justifyContent="center">
          <Touchable
            p={0}
            justifyContent="center"
            onPress={mountAndNavigateHandler}>
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
