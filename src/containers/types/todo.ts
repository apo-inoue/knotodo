import { Urgency_Enum } from '../../types/graphql';

export type TodoState = {
  title: string;
  urgency: Urgency_Enum;
  workload: number;
  is_today: boolean;
  category_id: number;
};

export type TodoCtxType = {
  newTodo: {
    state: TodoState;
    todoMountHandler: (is_today: boolean) => void;
    todoClearHandler: () => void;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category_id: number) => void;
    workloadSelectHandler: (workload: number) => void;
  };
  editTodo: {
    state: { id: number } & TodoState;
    todoMountHandler: (todo: { id: number } & TodoState) => void;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category_id: number) => void;
    workloadSelectHandler: (workload: number) => void;
  };
};
