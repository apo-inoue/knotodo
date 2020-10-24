import { isToday, isYesterday, isThisISOWeek, isThisMonth } from 'date-fns';
import { Todos } from '../types/graphql';

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
type ChronologicalTodo = {
  todayTodos: TodoType[];
  yesterdayTodos: TodoType[];
  thisWeekTodos: TodoType[];
  thisMonthTodos: TodoType[];
  otherTodos: TodoType[];
};
type ApplyChronology = (todos: TodoType[]) => ChronologicalTodo;

export const applyChronology: ApplyChronology = todos => {
  const chronologicalTodo: ChronologicalTodo = {
    todayTodos: [],
    yesterdayTodos: [],
    thisWeekTodos: [],
    thisMonthTodos: [],
    otherTodos: [],
  };
  todos.map((todo: TodoType) => {
    const completeDate = new Date(todo.completed_at);
    if (isToday(completeDate)) {
      chronologicalTodo.todayTodos.push(todo);
    } else if (isYesterday(completeDate)) {
      chronologicalTodo.yesterdayTodos.push(todo);
    } else if (isThisISOWeek(completeDate)) {
      chronologicalTodo.thisWeekTodos.push(todo);
    } else if (isThisMonth(completeDate)) {
      chronologicalTodo.thisMonthTodos.push(todo);
    } else {
      chronologicalTodo.otherTodos.push(todo);
    }
  });

  return chronologicalTodo;
};
