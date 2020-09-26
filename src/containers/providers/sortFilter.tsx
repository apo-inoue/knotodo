import React, { FC, useState, useCallback } from 'react';
import { SortFilterCtxProvider } from '../contexts/sortFilter';
import { SortFilterState, SortState } from '../types/sortFilter';
import { TodayTodosQueryVariables, Order_By } from '../../types/graphql';

export const SortFilterProvider: FC = ({ children }) => {
  const [state, setState] = useState<SortFilterState>({
    sortBy: { createdAt: false, workload: false, urgency: false },
    filterBy: { category: null },
  });
  const [sort, setSort] = useState<SortState>({
    key: 'created_at',
    order: 'asc',
  });

  const sortPressHandler = ({
    key,
    order,
  }: {
    key: keyof TodayTodosQueryVariables;
    order: Order_By;
  }) => {
    setSort({ key, order });
  };

  const sortInputHandler = useCallback(
    (e: string) => {
      console.log(e);
      setState({ ...state });
    },
    [state],
  );
  const filterSelectHandler = useCallback(
    (category: null | string) => {
      setState({ ...state, filterBy: { category: category } });
    },
    [state],
  );

  const value = {
    state,
    sort,
    sortPressHandler,
    sortInputHandler,
    filterSelectHandler,
  };

  return (
    <SortFilterCtxProvider value={value}>{children}</SortFilterCtxProvider>
  );
};
