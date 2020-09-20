import React from 'react';
import { useTheme } from 'styled-components';
import { Color } from '../3collection/Color';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Accomplishment } from '../4pages';
import { DrawerIcon } from '../1standalone/DrawerIcon';
import { CategorySetting } from '../3collection/CategorySetting';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <Accomplishment />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigation = () => {
  const theme = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.blacks[4],
      }}>
      <Drawer.Screen
        name="ホーム"
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="home" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="カラー設定"
        component={Color}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="color" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="カテゴリ設定"
        component={CategorySetting}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <DrawerIcon drawerName="categorySetting" color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
