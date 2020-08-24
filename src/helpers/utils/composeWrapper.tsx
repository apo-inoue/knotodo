import { FC, createElement } from 'react';

export const composeWrappers = (wrappers: FC[]): FC => {
  return wrappers.reduceRight(
    (Acc, Current): FC => {
      return props => createElement(Current, null, createElement(Acc, props as any));
    },
  );
};
