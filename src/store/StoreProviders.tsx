import React, { FC } from 'react';
import { AuthProvider } from '../containers/providers/auth';
import { CategoryProvider } from '../containers/providers/category';
import { TodoProvider } from '../containers/providers/todo';
import { CustomThemeProvider } from '../theme/provider';
import { SortProvider } from '../containers//providers/sort';
import { ColorProvider } from '../containers/providers/color';
import { CustomApolloProvider } from './apollo';

export const StoreProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      <CustomApolloProvider>
        <CustomThemeProvider>
          <ColorProvider>
            <CategoryProvider>
              <TodoProvider>
                <SortProvider>{children}</SortProvider>
              </TodoProvider>
            </CategoryProvider>
          </ColorProvider>
        </CustomThemeProvider>
      </CustomApolloProvider>
    </AuthProvider>
  );
};
