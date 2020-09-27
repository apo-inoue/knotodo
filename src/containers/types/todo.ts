import { Urgency_Enum } from '../../types/graphql';

export type TodoState = {
  title: string;
  urgency: Urgency_Enum;
  category_id: string;
  workload: number;
  isCompleted: boolean;
  isToday: boolean;
};

export type TodoCtxType = {
  newTodo: {
    state: TodoState;
    todoMountHandler: ({
      isToday,
      isCompleted,
    }: {
      isToday: boolean;
      isCompleted: boolean;
    }) => void;
    todoClearHandler: () => void;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category_id: string) => void;
    workloadSelectHandler: (workload: number) => void;
  };
  editTodo: {
    state: { id: string } & TodoState;
    todoMountHandler: (todo: { id: string } & TodoState) => void;
    titleInputHandler: (title: string) => void;
    urgencySelectHandler: (urgency: Urgency_Enum) => void;
    categorySelectHandler: (category_id: string) => void;
    workloadSelectHandler: (workload: number) => void;
  };
};
