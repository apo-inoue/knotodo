import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  AccomplishmentAndGoal,
  CategorySetting,
  Color,
  GoalSetting,
} from '../4pages';
import { DrawerIcon } from '../1standalone';
import { DRAWER_ROUTE_NAMES } from './type';
import { useAuthCtx } from '../../containers/contexts/auth';
import { Box } from '../../ui';

const CustomDrawerContent: FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = props => {
  const theme = useTheme();
  const { handleLogOut } = useAuthCtx();

  return (
    <Box width="100%" height="100%">
      <Box flexDirection="column" flex={1} height="80%">
        <DrawerContentScrollView {...props}>
          <AccomplishmentAndGoal />
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </Box>
      <Box>
        <DrawerItem
          label={DRAWER_ROUTE_NAMES.ログアウト}
          onPress={handleLogOut}
          activeTintColor={theme.colors.main}
          inactiveTintColor={theme.colors.blacks[6]}
          icon={({ color }: { color: string }) => (
            <DrawerIcon
              drawerName={DRAWER_ROUTE_NAMES.ログアウト}
              color={color}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export const DrawerNavigation: FC = () => {
  const theme = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName={DRAWER_ROUTE_NAMES.ホーム}
      drawerContent={(
        props: DrawerContentComponentProps<DrawerContentOptions>,
      ) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[6],
      }}>
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.ホーム}
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName={DRAWER_ROUTE_NAMES.ホーム} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.カラー設定}
        component={Color}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon
              drawerName={DRAWER_ROUTE_NAMES.カラー設定}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.カテゴリ設定}
        component={CategorySetting}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon
              drawerName={DRAWER_ROUTE_NAMES.カテゴリ設定}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.目標設定}
        component={GoalSetting}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon
              drawerName={DRAWER_ROUTE_NAMES.目標設定}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
