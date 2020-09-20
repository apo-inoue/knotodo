import { SortCtxType } from '../types/sort';
import { createCtx } from '../../helpers/createCtx';

export const [useSortCtx, SortCtxProvider] = createCtx<SortCtxType>();
