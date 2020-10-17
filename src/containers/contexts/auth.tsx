import { createCtx } from '../../helpers/createCtx';
import { useAuthContextType } from '../types/auth';

export const [useAuthCtx, AuthCtxProvider] = createCtx<useAuthContextType>();
