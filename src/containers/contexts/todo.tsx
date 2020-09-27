import { createCtx } from '../../helpers/createCtx';
import { TodoCtxType } from '../types/todo';

export const [useTodoCtx, TodoCtxProvider] = createCtx<TodoCtxType>();
