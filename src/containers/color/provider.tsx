import React, { FC, useState, useCallback } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { ColorCtxProvider } from './useCtx';

export const ColorProvider: FC = ({ children }) => {
  const [state, setState] = useState({ category: '' });

  const colorSelectHandler = useCallback((color: any) => {
    setState({ category: color });
  }, []);

  const value = {
    state,
    colorSelectHandler,
  };

  return <ColorCtxProvider value={value}>{children}</ColorCtxProvider>;
};
