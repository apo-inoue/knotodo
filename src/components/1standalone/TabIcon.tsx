import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TabIconProps = {
  name: string;
  color: string;
};

export const TabIcon: FC<TabIconProps> = ({ name, color }) => {
  return <MaterialCommunityIcons name={name} size={24} color={color} />;
};
