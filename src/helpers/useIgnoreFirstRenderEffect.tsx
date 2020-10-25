import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useIgnoreFirstRenderEffect: (func: Function) => void = func => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  useFocusEffect(
    useCallback(() => {
      if (isFirstRender) {
        setIsFirstRender(false);
      }
      func();
    }, [func, isFirstRender]),
  );
};
