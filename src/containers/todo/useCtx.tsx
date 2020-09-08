import { createCtx } from '../../helpers/createCtx';
import { TodoCtxType } from './type';

export const [useTodoCtx, TodoCtxProvider] = createCtx<TodoCtxType>();
