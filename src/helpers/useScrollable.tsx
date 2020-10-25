import { useState } from 'react';

type UseScrollableReturnType = {
  isScrollable: boolean;
  enableScrollHandler: () => void;
  disableScrollHandler: () => void;
};

export const useScrollable: () => UseScrollableReturnType = () => {
  const [isScrollable, setIsScrollable] = useState(true);
  const enableScrollHandler = () => {
    setIsScrollable(true);
  };
  const disableScrollHandler = () => {
    setIsScrollable(false);
  };

  return { isScrollable, enableScrollHandler, disableScrollHandler };
};
