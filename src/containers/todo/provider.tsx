import { FC, ChangeEvent, useReducer, useCallback, MouseEvent } from 'react';
import { createCtx } from '../../helpers/utils/createCtx';
import { Urgency, TodoCtxType } from './type';
import { todoReducer, initialState } from './reducer';
import { TodoCtxProvider } from './useCtx';

export const TodoProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const titleInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      actionType: 'SET_TITLE',
      payload: { title: e.target.value },
    });
  }, []);

  const urgencySelectHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    dispatch({
      actionType: 'SET_URGENCY',
      payload: { urgency: e.currentTarget.value as Urgency },
    });
  }, []);

  const value = {
    state,
    titleInputHandler,
    urgencySelectHandler,
  };

  return <TodoCtxProvider value={value}>{children}</TodoCtxProvider>;
};
