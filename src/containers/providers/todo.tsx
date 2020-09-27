import React, { FC, useState } from 'react';
import { TodoCtxProvider } from '../contexts/todo';
import { Urgency_Enum } from '../../types/graphql';
import { TodoState } from '../types/todo';

export const TodoProvider: FC = ({ children }) => {
  const initialTodo: TodoState = {
    title: '',
    urgency: 'week',
    category_id: '',
    workload: 1,
    isToday: false,
    isCompleted: false,
  };
  const [newTodo, setNewTodo] = useState<TodoState>(initialTodo);
  const [editTodo, setEditTodo] = useState<{ id: string } & TodoState>({
    ...initialTodo,
    id: '',
  });

  const newTodoMountHandler = ({
    isToday,
    isCompleted,
  }: {
    isToday: boolean;
    isCompleted: boolean;
  }) => {
    return setNewTodo({ ...initialTodo, isToday, isCompleted });
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
  const newTodoCategorySelectHandler = (category_id: string) => {
    return setNewTodo({ ...newTodo, category_id });
  };
  const newTodoWorkloadSelectHandler = (workload: number) => {
    return setNewTodo({ ...newTodo, workload });
  };

  const editTodoMountHandler = (todo: { id: string } & TodoState) => {
    return setEditTodo(todo);
  };
  const editTodoTitleInputHandler = (title: string) => {
    return setEditTodo({ ...editTodo, title });
  };
  const editTodoUrgencySelectHandler = (urgency: Urgency_Enum) => {
    return setEditTodo({ ...editTodo, urgency });
  };
  const editTodoCategorySelectHandler = (category_id: string) => {
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
