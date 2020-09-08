import { SortCtxType } from './type';
import { createCtx } from '../../helpers/createCtx';

export const [useSortCtx, SortCtxProvider] = createCtx<SortCtxType>();
