import React, { FC } from 'react';
import { AuthProvider } from './auth/provider';
import { FormProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';
import { SortProvider } from './sort/provider';

export const ComposedProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      <FormProvider>
        <TodoProvider>
          <SortProvider>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </SortProvider>
        </TodoProvider>
      </FormProvider>
    </AuthProvider>
  );
};
