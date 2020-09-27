import { useCallback, useRef, useLayoutEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEventCallback<A extends any[], R>(
  callback: (...args: A) => R,
): (...args: A) => R {
  const callbackRef = useRef<typeof callback>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: A) => {
    const cbRef = callbackRef.current;

    return cbRef(...args);
  }, []);
}
