import { createCtx } from '../../helpers/createCtx';
import { useAuthContextType } from './types';

export const [useAuthContext, AuthContextProvider] = createCtx<useAuthContextType>();
