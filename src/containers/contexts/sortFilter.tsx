import { SortFilterCtxType } from '../types/sortFilter';
import { createCtx } from '../../helpers/createCtx';

export const [useSortFilterCtx, SortFilterCtxProvider] = createCtx<
  SortFilterCtxType
>();
