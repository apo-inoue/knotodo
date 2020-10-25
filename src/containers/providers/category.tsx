import React, { FC, useState } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { CategoryCtxProvider } from '../contexts/category';

export const CategoryProvider: FC = ({ children }) => {
  const [state, setState] = useState({ category: '' });

  const categoryInputHandler = useEventCallback((title: string) => {
    setState({ category: title });
  });

  const value = {
    state,
    categoryInputHandler,
  };

  return <CategoryCtxProvider value={value}>{children}</CategoryCtxProvider>;
};
