import { ColorCtxType } from '../types/color';
import { createCtx } from '../../helpers/createCtx';

export const [useColorCtx, ColorCtxProvider] = createCtx<ColorCtxType>();
