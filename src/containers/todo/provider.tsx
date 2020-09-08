import React, { FC, useReducer, useCallback } from 'react';
import { todoReducer, initialState } from './reducer';
import { TodoCtxProvider } from './useCtx';
import { Urgency_Enum } from '../../types/graphql';

export const TodoProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const titleInputHandler = useCallback((text: string) => {
    dispatch({
      actionType: 'SET_TITLE',
      payload: { title: text },
    });
  }, []);

  const urgencySelectHandler = useCallback((urgency: Urgency_Enum) => {
    dispatch({
      actionType: 'SET_URGENCY',
      payload: { urgency },
    });
  }, []);

  const categorySelectHandler = useCallback((category: string) => {
    dispatch({
      actionType: 'SET_CATEGORY',
      payload: { category },
    });
  }, []);

  const workloadInputHandler = useCallback((workload: number) => {
    dispatch({
      actionType: 'SET_WORKLOAD',
      payload: { workload },
    });
  }, []);

  const value = {
    state,
    titleInputHandler,
    urgencySelectHandler,
    categorySelectHandler,
    workloadInputHandler,
  };

  return <TodoCtxProvider value={value}>{children}</TodoCtxProvider>;
};
