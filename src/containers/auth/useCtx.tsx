import { createCtx } from '../../helpers/utils/createCtx';
import { useAuthContextType } from './types';

export const [useAuthContext, AuthContextProvider] = createCtx<useAuthContextType>();
