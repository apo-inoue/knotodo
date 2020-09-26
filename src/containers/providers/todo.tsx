import React, { FC, useState } from 'react';
import { TodoCtxProvider } from '../contexts/todo';
import { Urgency_Enum } from '../../types/graphql';
import { TodoState } from '../types/todo';

export const TodoProvider: FC = ({ children }) => {
  const [newTodo, setNewTodo] = useState<TodoState>({
    title: '',
    urgency: 'week',
    category: '',
    workload: 1,
  });
  const [editTodo, setEditTodo] = useState<TodoState>({
    title: '',
    urgency: 'week',
    category: '',
    workload: 1,
  });

  const newTodoTitleInputHandler = (title: string) => {
    return setNewTodo({ ...newTodo, title });
  };
  const newTodoUrgencySelectHandler = (urgency: Urgency_Enum) => {
    return setNewTodo({ ...newTodo, urgency });
  };
  const newTodoCategorySelectHandler = (category: string) => {
    return setNewTodo({ ...newTodo, category });
  };
  const newTodoWorkloadSelectHandler = (workload: number) => {
    return setNewTodo({ ...newTodo, workload });
  };

  const editTodoMountHandler = (todo: TodoState) => {
    return setEditTodo(todo);
  };
  const editTodoTitleInputHandler = (title: string) => {
    return setNewTodo({ ...editTodo, title });
  };
  const editTodoUrgencySelectHandler = (urgency: Urgency_Enum) => {
    return setEditTodo({ ...editTodo, urgency });
  };
  const editTodoCategorySelectHandler = (category: string) => {
    return setEditTodo({ ...editTodo, category });
  };
  const editTodoWorkloadSelectHandler = (workload: number) => {
    return setEditTodo({ ...editTodo, workload });
  };

  const value = {
    newTodo: {
      state: newTodo,
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
