import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerRouteName, DRAWER_ROUTE_NAMES } from '../5navigation/type';

type DrawerIconProps = {
  drawerName: DrawerRouteName;
  color: string;
};

export const DrawerIcon: FC<DrawerIconProps> = ({ drawerName, color }) => {
  const drawerNameToIconName = () => {
    if (drawerName === DRAWER_ROUTE_NAMES.カラー設定) {
      return 'invert-colors';
    } else if (drawerName === DRAWER_ROUTE_NAMES.カテゴリ設定) {
      return 'folder-open';
    } else if (drawerName === DRAWER_ROUTE_NAMES.ヒトコト設定) {
      return 'chat-outline';
    } else if (drawerName === DRAWER_ROUTE_NAMES.ログアウト) {
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
