import { FormState, FormCtxType } from './type';
import { ChangeEvent } from 'react';
import { createCtx } from '../../helpers/utils/createCtx';

export const [useFormCtx, FormCtxProvider] = createCtx<FormCtxType>();
