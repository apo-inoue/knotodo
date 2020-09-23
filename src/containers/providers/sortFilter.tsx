import React, { FC, useState, useCallback } from 'react';
import { SortFilterCtxProvider } from '../contexts/sortFilter';
import { SortFilterState } from '../types/sortFilter';

export const SortFilterProvider: FC = ({ children }) => {
  const [state, setState] = useState<SortFilterState>({
    sortBy: { createdAt: false, workload: false, urgency: false },
    filterBy: { category: null },
  });

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
    sortInputHandler,
    filterSelectHandler,
  };

  return (
    <SortFilterCtxProvider value={value}>{children}</SortFilterCtxProvider>
  );
};
