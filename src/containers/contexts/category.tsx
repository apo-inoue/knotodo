import { CategoryCtxType } from '../types/category';
import { createCtx } from '../../helpers/createCtx';

export const [useCategoryCtx, CategoryCtxProvider] = createCtx<
  CategoryCtxType
>();
