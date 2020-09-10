import { ColorCtxType } from './type';
import { createCtx } from '../../helpers/createCtx';

export const [useColorCtx, ColorCtxProvider] = createCtx<ColorCtxType>();
