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
    categoryIds: [],
  });
  const [filterStateCopy, setFilterStateCopy] = useState<FilterState>({
    categoryIds: [],
  });
  const [isAll, setIsAll] = useState<boolean>(true);

  const selectSortHandler = ({
    key,
    order,
  }: {
    key: keyof TodayTodosQueryVariables;
    order: Order_By;
  }) => {
    setSortState({ key, order });
  };

  const mountFilterHandler = () => {
    setFilterStateCopy(filterState);
  };
  const cancelFilterHandler = () => {
    setFilterState(filterStateCopy);
  };
  const isAllToggler = () => {
    setIsAll(!isAll);
  };
  const checkOnHandler = (categoryId: string) => {
    setFilterState({ categoryIds: [...filterState.categoryIds, categoryId] });
  };
  const checkOffHandler = (categoryId: string) => {
    const { categoryIds } = filterState;
    const newCategoryIds = categoryIds.filter(
      stateCategoryId => stateCategoryId !== categoryId,
    );
    setFilterState({ categoryIds: newCategoryIds });
  };

  const value = {
    sort: {
      sortState,
      selectSortHandler,
    },
    filter: {
      filterState,
      mountFilterHandler,
      cancelFilterHandler,
      isAll,
      isAllToggler,
      checkOnHandler,
      checkOffHandler,
    },
  };

  return (
    <SortFilterCtxProvider value={value}>{children}</SortFilterCtxProvider>
  );
};
