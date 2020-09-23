export type SortFilterState = {
  sortBy: { createdAt: boolean; workload: boolean; urgency: boolean };
  filterBy: { category: null | string };
};

export type SortFilterCtxType = {
  state: SortFilterState;
  sortInputHandler: (e: string) => void;
  filterSelectHandler: (category: null | string) => void;
};
