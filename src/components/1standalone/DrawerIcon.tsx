import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type DrawerIconProps = {
  drawerName:
    | 'color'
    | 'home'
    | 'categorySetting'
    | 'messageSetting'
    | 'logout';
  color: string;
};

export const DrawerIcon: FC<DrawerIconProps> = ({ drawerName, color }) => {
  const drawerNameToIconName = () => {
    if (drawerName === 'color') {
      return 'invert-colors';
    } else if (drawerName === 'categorySetting') {
      return 'folder-open';
    } else if (drawerName === 'messageSetting') {
      return 'chat-outline';
    } else if (drawerName === 'logout') {
      return 'logout';
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
