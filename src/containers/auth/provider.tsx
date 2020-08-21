import { FC, ChangeEvent, useReducer, useCallback } from 'react';
import { useEventCallback } from '../../helpers/utils/useEventCallback';
import { validationSchema } from './utils';
import { initialState, formReducer } from './reducer';
import { FormCtxProvider } from './useAuthCtx';

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

  return <FormCtxProvider value={value}>{children}</FormCtxProvider>;
};
