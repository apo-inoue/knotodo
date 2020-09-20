import React, { FC, useState } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { SortCtxProvider } from '../contexts/sort';

export const SortProvider: FC = ({ children }) => {
  const [state, setState] = useState({ sort: '' });

  const sortInputHandler = useEventCallback((e: string) => {
    setState({ sort: e });
  });

  const value = {
    state,
    sortInputHandler,
  };

  return <SortCtxProvider value={value}>{children}</SortCtxProvider>;
};
