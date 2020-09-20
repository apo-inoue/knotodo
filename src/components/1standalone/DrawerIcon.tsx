import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type DrawerIconProps = {
  drawerName: 'color' | 'home' | 'categorySetting';
  color: string;
};

export const DrawerIcon: FC<DrawerIconProps> = ({ drawerName, color }) => {
  const drawerNameToIconName = () => {
    if (drawerName === 'color') {
      return 'invert-colors';
    } else if (drawerName === 'categorySetting') {
      return 'folder-open';
    } else {
      return 'home';
    }
  };

  return (
    <MaterialCommunityIcons
      name={drawerNameToIconName()}
      size={24}
      color={color}
    />
  );
};
