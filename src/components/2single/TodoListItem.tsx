import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { Touchable, PrimaryButton, Box, Text, SlideUpView } from '../../ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { useTodoCtx } from '../../containers/contexts/todo';
import { TodoState } from '../../containers/types/todo';

type TodoListItem = {
  todo: { __typename?: 'todos' } & Pick<
    Todos,
    'id' | 'title' | 'is_today' | 'urgency' | 'workload' | 'category_id'
  >;
  buttonAction: {
    label: string;
    onPress: (id: number) => void;
  };
};

export const TodoListItem: FC<TodoListItem> = ({ todo, buttonAction }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    editTodo: { todoMountHandler },
  } = useTodoCtx();
  const isToday = route.name === 'Today';
  const mountAndNavigateHandler = () => {
    const mountTodo: { id: number } & TodoState = {
      id: todo.id,
      title: todo.title,
      category_id: todo.category_id,
      urgency: todo.urgency,
      workload: todo.workload,
      is_today: isToday,
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
