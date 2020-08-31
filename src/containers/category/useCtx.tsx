import { CategoryCtxType } from './type';
import { createCtx } from '../../helpers/createCtx';

export const [useFormCtx, FormCtxProvider] = createCtx<CategoryCtxType>();
