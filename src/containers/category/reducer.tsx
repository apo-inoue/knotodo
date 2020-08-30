import { FormState, FormAction } from './type';

export const initialState: FormState = {
  value: '',
  error: '',
};

export const formReducer: (state: FormState, action: FormAction) => FormState = (state, action) => {
  const { actionType, payload } = action;

  switch (actionType) {
    case 'SET_CATEGORY':
      return {
        ...state,
        payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
