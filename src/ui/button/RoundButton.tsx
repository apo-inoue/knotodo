import React, { FC } from 'react';
import { TouchableProps, Touchable } from './Touchable';

export const RoundButton: FC<TouchableProps> = props => {
  return (
    <Touchable
      variant="contained"
      color="primary"
      center
      height={50}
      width={50}
      borderRadius={25}
      {...props}>
      {props.children}
    </Touchable>
  );
};
