import React, { FC, useState } from 'react';
import { SortFilterCtxProvider } from '../contexts/sortFilter';
import { SortState, FilterState } from '../types/sortFilter';
import { TodayTodosQueryVariables, Order_By } from '../../types/graphql';

export const SortFilterProvider: FC = ({ children }) => {
  const [sortState, setSortState] = useState<SortState>({
    key: 'created_at',
    order: 'desc',
  });
  const [filterState, setFilterState] = useState<FilterState>({
    isAll: true,
    categoryIds: [],
  });

  const selectSortHandler = (
    key: keyof TodayTodosQueryVariables,
    order: Order_By,
  ) => {
    setSortState({ key, order });
  };
  const isAllToggler = () => {
    setFilterState({ isAll: !filterState.isAll, categoryIds: [] });
  };
  const checkOnHandler = (categoryId: string) => {
    setFilterState({
      isAll: false,
      categoryIds: [...filterState.categoryIds, categoryId],
    });
  };
  const checkOffHandler = (categoryId: string) => {
    const { categoryIds } = filterState;
    const newCategoryIds = categoryIds.filter(
      stateCategoryId => stateCategoryId !== categoryId,
    );
    setFilterState({ isAll: false, categoryIds: newCategoryIds });
  };

  const value = {
    sort: {
      sortState,
      selectSortHandler,
    },
    filter: {
      filterState,
      isAllToggler,
      checkOnHandler,
      checkOffHandler,
    },
  };

  return (
    <SortFilterCtxProvider value={value}>{children}</SortFilterCtxProvider>
  );
};
