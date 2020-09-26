import { Urgency_Enum } from '../../types/graphql';

export type TodoState = {
  title: string;
  urgency: Urgency_Enum;
  category: string;
  workload: number;
};

export type TodoCtxType = {
  newTodo: {
    state: TodoState;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category: string) => void;
    workloadSelectHandler: (workload: number) => void;
  };
  editTodo: {
    state: TodoState;
    todoMountHandler: (todo: TodoState) => void;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category: string) => void;
    workloadSelectHandler: (workload: number) => void;
  };
};
