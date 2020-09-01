import { ChangeEvent, MouseEvent } from 'react';
export type TodoAction =
  | { actionType: 'SET_TITLE'; payload: { title: string } }
  | { actionType: 'SET_URGENCY'; payload: { urgency: Urgency } };

export type Urgency = 'today' | 'tomorrow';

export type TodoState = {
  title: string;
  urgency: Urgency;
};

export type TodoCtxType = {
  state: TodoState;
  titleInputHandler: (text: string) => void;
  urgencySelectHandler: (e: MouseEvent<any>) => void;
};
