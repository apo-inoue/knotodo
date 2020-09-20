import React, { FC } from 'react';
import { Image } from '../../ui';

export const Logo: FC = () => {
  return (
    <Image
      height={24}
      width={24}
      source={require('../../../assets/knot2.png')}
    />
  );
};
