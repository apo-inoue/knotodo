import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

type TabIconProps = {
  name: string;
  color: any;
};

export const TabIcon: FC<TabIconProps> = ({ name, color }) => {
  const theme = useTheme();

  return <FontAwesome name={name} size={24} color={color} />;
};
