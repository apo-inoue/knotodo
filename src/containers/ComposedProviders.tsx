import React, { FC } from 'react';
import { AuthProvider } from './auth/provider';
import { CategoryProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';
import { SortProvider } from './sort/provider';

export const ComposedProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      <CategoryProvider>
        <TodoProvider>
          <SortProvider>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </SortProvider>
        </TodoProvider>
      </CategoryProvider>
    </AuthProvider>
  );
};
