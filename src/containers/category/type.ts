import { ChangeEvent } from 'react';

export type FormAction =
  | { actionType: 'SET_CATEGORY'; payload: { value: string } }
  | { actionType: 'SET_ERROR'; payload: { error: string } };

export type FormState = {
  value: string;
  error: string;
};

export type FormCtxType = {
  state: FormState;
  handleChange: (e: string) => void;
};
