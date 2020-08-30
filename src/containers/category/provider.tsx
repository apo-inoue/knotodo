import React, { FC, useReducer } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { initialState, formReducer } from './reducer';
import { FormCtxProvider } from './useCtx';

export const FormProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = useEventCallback((e: string) => {
    dispatch({
      actionType: 'SET_CATEGORY',
      payload: { value: e },
    });
  });

  const value = {
    state,
    handleChange,
  };

  return <FormCtxProvider value={value}>{children}</FormCtxProvider>;
};
