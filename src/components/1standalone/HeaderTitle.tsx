import React, { FC } from 'react';
import { Box, Text } from '../../ui';
import { useTheme } from 'styled-components';
import { Logo } from './Logo';
import { DRAWER_ROUTE_NAMES, DrawerRouteName } from '../5navigation/type';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';

export const HeaderTitle: FC<{
  // eslint-disable-next-line @typescript-eslint/ban-types
  route: RouteProp<Record<string, object | undefined>, 'Root'>;
}> = ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route) as DrawerRouteName;
  const theme = useTheme();

  switch (routeName) {
    case DRAWER_ROUTE_NAMES.ホーム:
      return (
        <Box flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Logo />
          </Box>
          <Text span color={theme.colors.white} fontWeight="bold">
            knotodo
          </Text>
        </Box>
      );
    case DRAWER_ROUTE_NAMES.カラー設定:
      return (
        <Text span color={theme.colors.white} fontWeight="bold">
          カラー設定
        </Text>
      );
    case DRAWER_ROUTE_NAMES.カテゴリ設定:
      return (
        <Text span color={theme.colors.white} fontWeight="bold">
          カテゴリ設定
        </Text>
      );
    default:
      return (
        <Box flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Logo />
          </Box>
          <Text span color={theme.colors.white} fontWeight="bold">
            knoTodo
          </Text>
        </Box>
      );
  }
};
