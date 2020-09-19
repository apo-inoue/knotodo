import { CategoryCtxType } from '../types/category';
import { createCtx } from '../../helpers/createCtx';

export const [useFormCtx, FormCtxProvider] = createCtx<CategoryCtxType>();
