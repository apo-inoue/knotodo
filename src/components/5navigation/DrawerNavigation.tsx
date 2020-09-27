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
} from '@react-navigation/drawer';
import { AccomplishmentAndMessage, CategorySetting, Color } from '../4pages';
import { DrawerIcon } from '../1standalone';
import { DRAWER_ROUTE_NAMES } from './type';
import { MessageSetting } from '../4pages/MessageSetting';

const CustomDrawerContent: FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <AccomplishmentAndMessage />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigation: FC = () => {
  const theme = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(
        props: DrawerContentComponentProps<DrawerContentOptions>,
      ) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[4],
      }}>
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.ホーム}
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="home" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.カラー設定}
        component={Color}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="color" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.カテゴリ設定}
        component={CategorySetting}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="categorySetting" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE_NAMES.ヒトコト設定}
        component={MessageSetting}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="messageSetting" color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
