import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CustomIconProps = {
  name: string;
  color: string;
};

export const CustomIcon: FC<CustomIconProps> = ({ name, color }) => {
  return <MaterialCommunityIcons name={name} size={24} color={color} />;
};
