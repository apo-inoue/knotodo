import React, { FC } from 'react';
import { AuthProvider } from './auth/provider';
import { CategoryProvider } from './category/provider';
import { TodoProvider } from './todo/provider';
import { CustomThemeProvider } from './theme/provider';
import { SortProvider } from './sort/provider';
import { ColorProvider } from './color/provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const ComposedProviders: FC = ({ children }) => {
  return (
    <AuthProvider>
      {/* // defaultColor */}
      <CustomThemeProvider>
        <CategoryProvider>
          <TodoProvider>
            <SortProvider>{children}</SortProvider>
          </TodoProvider>
        </CategoryProvider>
      </CustomThemeProvider>
    </AuthProvider>
  );
};
