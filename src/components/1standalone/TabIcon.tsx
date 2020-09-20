import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TabIconProps = {
  tabName: 'today' | 'notToday' | 'archive';
  color: string;
};

export const TabIcon: FC<TabIconProps> = ({ tabName, color }) => {
  const tabNameToIconName = () => {
    if (tabName === 'today') {
      return 'calendar-blank';
    } else if (tabName === 'notToday') {
      return 'calendar-today';
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
