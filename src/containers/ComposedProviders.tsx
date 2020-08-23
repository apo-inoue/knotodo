import React, { FC } from 'react';
import { composeWrappers } from '../helpers/utils/composeWrapper';
import { AuthProvider } from './auth/provider';
import { FormProvider } from './form/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';

export const ComposedProviders = composeWrappers([
  AuthProvider,
  FormProvider,
  TodoProvider,
  CustomThemeProvider,
]);
