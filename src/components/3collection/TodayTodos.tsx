import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider, PrimaryButton } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { ListRenderItemInfo } from 'react-native';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;
type TodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
  onPostpone: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todos, onPress, onPostpone }) => {
  const navigation = useNavigation();
  const renderItem = (rowData: ListRenderItemInfo<TodoType>) => (
    <Box>
      <SwipeRow rightOpenValue={-100}>
        <Box
          pl={4}
          flexDirection="row"
          justifyContent="space-between"
          flex={1}
          alignItems="center">
          <Box flexDirection="column" alignItems="flex-end" width="100%">
            <PrimaryButton
              variant="contained"
              text="NotToday"
              onPress={() => onPostpone(rowData.item.id)}
            />
          </Box>
        </Box>
        <Box width="100%" bg="white">
          <TodoListItem
            todo={rowData.item}
            buttonAction={{ onPress, label: 'Complete' }}
          />
        </Box>
      </SwipeRow>
      <Box width="100%" />
      <Divider width="100%" />
      {/* // NOTE: FABが重なって押しにくくなるのを避けるため余白を追加する */}
      {todos.length - 1 === rowData.index && <Box mb={5} />}
    </Box>
  );

  return (
    <>
      <Box mt={2} width="100%" flex={1}>
        <SwipeListView<TodoType>
          data={todos}
          keyExtractor={(item: TodoType) => item.id}
          renderItem={renderItem}
          leftOpenValue={75}
          rightOpenValue={-150}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate(STACK_ROUTE_NAMES.新規作成)} />
    </>
  );
};
