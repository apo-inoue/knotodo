import { FC, ChangeEvent, useReducer, useCallback, MouseEvent } from 'react';
import { createCtx } from '../../helpers/utils/createCtx';
import { Urgency, TodoCtxType } from './type';
import { todoReducer, initialState } from './reducer';

export const [useTodoCtx, TodoCtxProvider] = createCtx<TodoCtxType>();
