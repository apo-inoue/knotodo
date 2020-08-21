import { ChangeEvent } from 'react';

export type FormAction =
  | { actionType: 'RESET_FORM' }
  | { actionType: 'SET_FIELD_VALUE'; payload: { field: string; value: any } }
  | { actionType: 'SET_FIELD_ERROR'; payload: { field: string; error: any } };

export type FormValues = {
  name: string;
  email: string;
  password: string;
};

export type FormError = {
  [K in keyof FormValues]: string | null;
};

export type FormState = {
  values: FormValues;
  errors: FormError;
};

export type FormCtxType = {
  state: FormState;
  handleChange: (e: ChangeEvent<any>) => void;
};
