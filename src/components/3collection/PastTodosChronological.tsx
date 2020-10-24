import React, { FC, useMemo } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import { Box, Text } from '../../ui';
import { Todos } from '../../types/graphql';
import { applyChronology } from '../../helpers/applyChronology';

type TodoType = { __typename?: 'todos' } & Pick<
  Todos,
  | 'id'
  | 'title'
  | 'urgency'
  | 'workload'
  | 'is_today'
  | 'category_id'
  | 'completed_at'
>;
type PastTodosChronologicalProps = {
  todos: TodoType[];
  renderItem: (rowData: ListRenderItemInfo<TodoType>) => JSX.Element;
  isScrollable: boolean;
};

export const PastTodosChronological: FC<PastTodosChronologicalProps> = ({
  todos,
  renderItem,
  isScrollable,
}) => {
  // ---------- chronology ----------
  const {
    todayTodos,
    yesterdayTodos,
    thisWeekTodos,
    thisMonthTodos,
    otherTodos,
  } = useMemo(() => applyChronology(todos), [todos]);

  return (
    <Box mt={2} width="100%">
      {todayTodos.length > 0 && (
        <Box width="100%" mb={4}>
          <ChronologicalLabel borderLeftWidth={4}>
            <Text>今日の完了タスク</Text>
          </ChronologicalLabel>
          <SwipeListView<TodoType>
            data={todos}
            keyExtractor={(item: TodoType) => `${item.id}`}
            renderItem={renderItem}
            leftOpenValue={75}
            rightOpenValue={-250}
            scrollEnabled={isScrollable}
          />
        </Box>
      )}
      {yesterdayTodos.length > 0 && (
        <Box width="100%" mb={2}>
          <ChronologicalLabel borderLeftWidth={4}>
            <Text>昨日の完了タスク</Text>
          </ChronologicalLabel>
          <SwipeListView<TodoType>
            data={todos}
            keyExtractor={(item: TodoType) => `${item.id}`}
            renderItem={renderItem}
            leftOpenValue={75}
            rightOpenValue={-250}
            scrollEnabled={isScrollable}
          />
        </Box>
      )}
      {thisWeekTodos.length > 0 && (
        <Box width="100%" mb={2}>
          <ChronologicalLabel borderLeftWidth={4}>
            <Text>今週の完了タスク</Text>
          </ChronologicalLabel>
          <SwipeListView<TodoType>
            data={todos}
            keyExtractor={(item: TodoType) => `${item.id}`}
            renderItem={renderItem}
            leftOpenValue={75}
            rightOpenValue={-250}
            scrollEnabled={isScrollable}
          />
        </Box>
      )}
      {thisMonthTodos.length > 0 && (
        <Box width="100%" mb={2}>
          <ChronologicalLabel borderLeftWidth={4}>
            <Text>今月の完了タスク</Text>
          </ChronologicalLabel>
          <SwipeListView<TodoType>
            data={todos}
            keyExtractor={(item: TodoType) => `${item.id}`}
            renderItem={renderItem}
            leftOpenValue={75}
            rightOpenValue={-250}
            scrollEnabled={isScrollable}
          />
        </Box>
      )}
      {otherTodos.length > 0 && (
        <Box width="100%" mb={2}>
          <ChronologicalLabel borderLeftWidth={4}>
            <Text>過去の完了タスク</Text>
          </ChronologicalLabel>
          <SwipeListView<TodoType>
            data={todos}
            keyExtractor={(item: TodoType) => `${item.id}`}
            renderItem={renderItem}
            leftOpenValue={75}
            rightOpenValue={-250}
            scrollEnabled={isScrollable}
          />
        </Box>
      )}
    </Box>
  );
};

const ChronologicalLabel = styled(Box)`
  margin-bottom: ${props => `${props.theme.space[1]}px`};
  padding-left: ${props => `${props.theme.space[2]}px`};
  width: 140px;
  border-color: ${props => props.theme.colors.blacks[7]};
`;
