import { TodayTodosQueryVariables, Order_By } from '../../types/graphql';

export type SortState = {
  key: keyof TodayTodosQueryVariables;
  order: Order_By;
};

export type FilterState = {
  isAll: boolean;
  categoryIds: string[];
};

export type SortFilterCtxType = {
  sort: {
    sortState: SortState;
    selectSortHandler: (
      key: keyof TodayTodosQueryVariables,
      order: Order_By,
    ) => void;
  };
  filter: {
    filterState: FilterState;
    mountFilterHandler: () => void;
    cancelFilterHandler: () => void;
    isAllToggler: () => void;
    checkOnHandler: (categoryId: string) => void;
    checkOffHandler: (categoryId: string) => void;
  };
};
