import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { ArchiveTodoSwipe } from './ArchiveTodoSwipe';
import { AddFab } from '../1standalone';
import { STACK_ROUTE_NAMES } from '../5navigation/type';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'urgency' | 'workload' | 'isToday' | 'isCompleted'
>;
type ArchiveTodosType = {
  todos: TodoType[];
  onPress: (id: string) => void;
  onRestoreToday: (id: string) => void;
  onRestoreNotToday: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({
  todos,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const navigation = useNavigation();

  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => {
    const isLastRow = todos.length - 1 === rowData.index;
    const todo = rowData.item;
    return (
      <Box>
        <ArchiveTodoSwipe
          todo={todo}
          onPress={onPress}
          onRestoreToday={onRestoreToday}
          onRestoreNotToday={onRestoreNotToday}
        />
        <Divider width="100%" />
        {isLastRow && <Box mb={5} />}
      </Box>
    );
  };

  return (
    <>
      <Box mt={2} width="100%">
        <SwipeListView<TodoType>
          data={todos}
          keyExtractor={(item: TodoType) => item.id}
          renderItem={renderItem}
          leftOpenValue={75}
          rightOpenValue={-250}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
