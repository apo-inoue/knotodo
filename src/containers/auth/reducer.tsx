import { FormState, FormAction } from './type';

export const initialState: FormState = {
  values: { name: '', email: '', password: '' },
  errors: { name: null, email: null, password: null },
};

export const formReducer: (
  state: FormState,
  action: FormAction,
) => FormState = (state, action) => {
  switch (action.actionType) {
    case 'RESET_FORM':
      return {
        ...state,
        values: initialState.values,
      };
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.field]: action.payload.value,
        },
      };
    case 'SET_FIELD_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.error,
        },
      };
  }
};
