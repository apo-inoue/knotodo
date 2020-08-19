import { FC, Dispatch, ChangeEvent, useReducer, useCallback } from 'react';
import { createCtx } from '../utils/createCtx';
import { useEventCallback } from '../utils/useEventCallback';
import { validationSchema } from '../form/validationSchema';

type FormAction =
  | { actionType: 'RESET_FORM' }
  | { actionType: 'SET_FIELD_VALUE'; payload: { field: string; value: any } }
  | { actionType: 'SET_FIELD_ERROR'; payload: { field: string; error: any } };

type FormValues = {
  name: string;
  email: string;
  password: string;
};

type FormError = {
  [K in keyof FormValues]: string | null;
};

type FormState = {
  values: FormValues;
  errors: FormError;
};

const initialState: FormState = {
  values: { name: '', email: '', password: '' },
  errors: { name: null, email: null, password: null },
};

const formReducer: (state: FormState, action: FormAction) => FormState = (
  state,
  action,
) => {
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

type FormContextType = {
  state: FormState;
  handleChange: (e: ChangeEvent<any>) => void;
};

export const [useFormContext, FormContextProvider] = createCtx<
  FormContextType
>();

export const FormProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const runValidationSchema = async (field: any, value: any) => {
    const error = validationSchema(field, value);
    return error;
  };

  const validateOnChange = useEventCallback(async (field: any, value: any) => {
    try {
      const error = await runValidationSchema(field, value);
      if (!!error) {
        dispatch({
          actionType: 'SET_FIELD_ERROR',
          payload: { field, error },
        });
      }
    } catch (e) {
      return console.warn('Warning: An unhandled error was caught');
    }
  });

  const resetForm = useCallback(() => {
    dispatch({
      actionType: 'RESET_FORM',
    });
  }, []);

  const setFieldValue = useEventCallback((field: string, value: any) => {
    dispatch({
      actionType: 'SET_FIELD_VALUE',
      payload: { field, value },
    });
  });

  const handleChange = useEventCallback((e: ChangeEvent<any>) => {
    const field = e.target.id;
    const value = e.target.value;
    setFieldValue(field, value);
    return validateOnChange(field, value);
  });

  const value = {
    state,
    resetForm,
    handleChange,
  };

  return <FormContextProvider value={value}>{children}</FormContextProvider>;
};
