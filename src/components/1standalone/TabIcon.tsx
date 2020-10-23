import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabRouteName, TAB_ROUTE_NAMES } from '../5navigation/type';

type TabIconProps = {
  tabName: TabRouteName;
  color: string;
};

export const TabIcon: FC<TabIconProps> = ({ tabName, color }) => {
  const tabNameToIconName = () => {
    if (tabName === TAB_ROUTE_NAMES.今日) {
      return 'calendar-today';
    } else if (tabName === TAB_ROUTE_NAMES.未来) {
      return 'calendar-blank';
    } else {
      return 'calendar-clock';
    }
  };

  return (
    <MaterialCommunityIcons
      name={tabNameToIconName()}
      size={24}
      color={color}
    />
  );
};
