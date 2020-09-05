import React, { FC } from 'react';
import { AuthProvider } from './auth/provider';
import { FormProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';

export const ComposedProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      <FormProvider>
        <TodoProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </TodoProvider>
      </FormProvider>
    </AuthProvider>
  );
};
