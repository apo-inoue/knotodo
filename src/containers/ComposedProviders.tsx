import { composeWrappers } from '../helpers/composeWrapper';
import { AuthProvider } from './auth/provider';
import { FormProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';

export const ComposedProviders = composeWrappers([
  AuthProvider,
  FormProvider,
  TodoProvider,
  CustomThemeProvider,
]);
