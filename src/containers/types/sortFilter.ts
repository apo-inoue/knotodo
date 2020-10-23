import { Maybe } from '../../types/graphql';
import { Order_By, Todos_Order_By } from '../../types/graphql';

export type SortState = Maybe<Array<Todos_Order_By>>;

export type FilterState = {
  isAll: boolean;
  categoryIds: number[];
};

export type SortFilterCtxType = {
  sort: {
    sortState: SortState;
    selectSortHandler: (key: keyof Todos_Order_By, order: Order_By) => void;
  };
  filter: {
    filterState: FilterState;
    isAllToggler: () => void;
    checkOnHandler: (categoryId: number) => void;
    checkOffHandler: (categoryId: number) => void;
  };
};
