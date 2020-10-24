import React, { FC, useState } from 'react';
import { SortFilterCtxProvider } from '../contexts/sortFilter';
import { SortState, FilterState } from '../types/sortFilter';
import { Order_By, Todos_Order_By } from '../../types/graphql';

export const SortFilterProvider: FC = ({ children }) => {
  // ---------- Sort ----------
  const defaultSortValue: SortState = [
    {
      category_id: 'desc',
      created_at: 'desc',
    },
  ];
  const [sortState, setSortState] = useState<SortState>(defaultSortValue);
  const isDefault = sortState === defaultSortValue;
  const selectSortHandler = (key: keyof Todos_Order_By, order: Order_By) => {
    setSortState([{ [key]: order }]);
  };
  const clearSortHandler = () => {
    setSortState(defaultSortValue);
  };

  // ---------- Filter ----------
  const [filterState, setFilterState] = useState<FilterState>({
    isAll: true,
    categoryIds: [],
  });
  const isAllToggler = () => {
    setFilterState({ isAll: !filterState.isAll, categoryIds: [] });
  };
  const checkOnHandler = (categoryId: number) => {
    setFilterState({
      isAll: false,
      categoryIds: [...filterState.categoryIds, categoryId],
    });
  };
  const checkOffHandler = (categoryId: number) => {
    const { categoryIds } = filterState;
    const newCategoryIds = categoryIds.filter(
      stateCategoryId => stateCategoryId !== categoryId,
    );
    setFilterState({ isAll: false, categoryIds: newCategoryIds });
  };

  const value = {
    sort: {
      sortState,
      isDefault,
      selectSortHandler,
      clearSortHandler,
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
