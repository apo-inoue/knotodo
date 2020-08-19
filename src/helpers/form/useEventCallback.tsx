import { useCallback, useRef, useEffect } from 'react';

export const useEventCallback = <T extends (...args: any[]) => any>(
  fn: T,
): T => {
  const ref: any = useRef(fn);

  // we copy a ref to the callback scoped to the current state/props on each render
  useEffect(() => {
    ref.current = fn;
  }, []);

  return useCallback(
    (...args: any[]) => ref.current.apply(void 0, args),
    [],
  ) as T;
};
