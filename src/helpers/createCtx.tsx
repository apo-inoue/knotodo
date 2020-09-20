import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createCtx<A extends unknown | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
