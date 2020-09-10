import React, { FC, useState } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { FormCtxProvider } from './useCtx';

export const CategoryProvider: FC = ({ children }) => {
  const [state, setState] = useState({ category: '' });

  const categoryInputHandler = useEventCallback((e: string) => {
    setState({ category: e });
  });

  const value = {
    state,
    categoryInputHandler,
  };

  return <FormCtxProvider value={value}>{children}</FormCtxProvider>;
};
