import React, { FC } from 'react';
import { AuthProvider } from './auth/provider';
import { CategoryProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';
import { SortProvider } from './sort/provider';
import { ColorProvider } from './color/provider';

export const ComposedProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      <CategoryProvider>
        <TodoProvider>
          <SortProvider>
            <ColorProvider>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </ColorProvider>
          </SortProvider>
        </TodoProvider>
      </CategoryProvider>
    </AuthProvider>
  );
};
