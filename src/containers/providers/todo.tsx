import React, { FC, useState } from 'react';
import { TodoCtxProvider } from '../contexts/todo';
import { Urgency_Enum } from '../../types/graphql';
import { TodoState } from '../types/todo';

export const TodoProvider: FC = ({ children }) => {
  const initialTodo: TodoState = {
    title: '',
    urgency: 'WEEK',
    workload: 1,
    is_today: false,
    category_id: 0,
  };
  const [newTodo, setNewTodo] = useState<TodoState>(initialTodo);
  const [editTodo, setEditTodo] = useState<{ id: number } & TodoState>({
    ...initialTodo,
    id: 1,
  });

  const newTodoMountHandler = (is_today: boolean) => {
    return setNewTodo({ ...initialTodo, is_today });
  };
  const newTodoClearHandler = () => {
    setNewTodo(initialTodo);
  };
  const newTodoTitleInputHandler = (title: string) => {
    return setNewTodo({ ...newTodo, title });
  };
  const newTodoUrgencySelectHandler = (urgency: Urgency_Enum) => {
    return setNewTodo({ ...newTodo, urgency });
  };
  const newTodoCategorySelectHandler = (category_id: number) => {
    return setNewTodo({ ...newTodo, category_id });
  };
  const newTodoWorkloadSelectHandler = (workload: number) => {
    return setNewTodo({ ...newTodo, workload });
  };

  const editTodoMountHandler = (todo: { id: number } & TodoState) => {
    return setEditTodo(todo);
  };
  const editTodoTitleInputHandler = (title: string) => {
    return setEditTodo({ ...editTodo, title });
  };
  const editTodoUrgencySelectHandler = (urgency: Urgency_Enum) => {
    return setEditTodo({ ...editTodo, urgency });
  };
  const editTodoCategorySelectHandler = (category_id: number) => {
    return setEditTodo({ ...editTodo, category_id });
  };
  const editTodoWorkloadSelectHandler = (workload: number) => {
    return setEditTodo({ ...editTodo, workload });
  };

  const value = {
    newTodo: {
      state: newTodo,
      todoMountHandler: newTodoMountHandler,
      todoClearHandler: newTodoClearHandler,
      titleInputHandler: newTodoTitleInputHandler,
      urgencySelectHandler: newTodoUrgencySelectHandler,
      categorySelectHandler: newTodoCategorySelectHandler,
      workloadSelectHandler: newTodoWorkloadSelectHandler,
    },
    editTodo: {
      state: editTodo,
      todoMountHandler: editTodoMountHandler,
      titleInputHandler: editTodoTitleInputHandler,
      urgencySelectHandler: editTodoUrgencySelectHandler,
      categorySelectHandler: editTodoCategorySelectHandler,
      workloadSelectHandler: editTodoWorkloadSelectHandler,
    },
  };

  return <TodoCtxProvider value={value}>{children}</TodoCtxProvider>;
};
