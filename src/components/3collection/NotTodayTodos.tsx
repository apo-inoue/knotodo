import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { TodoListItem } from '../2single';
import { AddFab } from '../1standalone/AddFab';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider, PrimaryButton } from '../../ui';
import { STACK_ROUTE_NAMES } from '../5navigation/type';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  'title' | 'id' | 'isToday' | 'isCompleted'
>;
type NotTodayTodos = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
  onComplete: (id: string) => void;
};

export const NotTodayTodos: FC<NotTodayTodos> = ({
  todos,
  onPress,
  onComplete,
}) => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }: { item: TodoType; index: number }) => (
    <SwipeRow rightOpenValue={-100}>
      <Box
        pl={4}
        flexDirection="row"
        justifyContent="space-between"
        flex={1}
        alignItems="center">
        <Box flexDirection="column" alignItems="flex-end" width="100%">
          <Box flexDirection="row" alignItems="center" height={50}>
            <PrimaryButton
              variant="contained"
              text="Complete"
              onPress={() => onComplete(item.id)}
            />
          </Box>
          <Divider width="100%" />
          {todos.length - 1 === index && <Box mb={5} />}
        </Box>
      </Box>
      <Box width="100%" bg="white">
        <TodoListItem todo={item} buttonAction={{ onPress, label: 'Today' }} />
        <Divider />
        {/* // NOTE: FABが重なって押しにくくなるのを避けるため余白を追加する */}
        {todos.length - 1 === index && <Box mb={5} />}
      </Box>
    </SwipeRow>
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
