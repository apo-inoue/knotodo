import { TodayTodosQueryVariables, Order_By } from '../../types/graphql';

type Key = keyof TodayTodosQueryVariables;

export type SortState = {
  key: Key;
  order: Order_By;
};

export type SortFilterState = {
  sortBy: { createdAt: boolean; workload: boolean; urgency: boolean };
  filterBy: { category: null | string };
};

export type SortFilterCtxType = {
  state: SortFilterState;
  sort: SortState;
  sortPressHandler: ({
    key,
    order,
  }: {
    key: keyof TodayTodosQueryVariables;
    order: Order_By;
  }) => void;
  sortInputHandler: (e: string) => void;
  filterSelectHandler: (category: null | string) => void;
};
