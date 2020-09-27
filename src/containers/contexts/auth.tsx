import { createCtx } from '../../helpers/createCtx';
import { useAuthContextType } from '../types/auth';

export const [useAuthContext, AuthContextProvider] = createCtx<
  useAuthContextType
>();
