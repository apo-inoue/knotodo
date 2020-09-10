import React from 'react';
import { useTheme } from 'styled-components';
import { CustomIcon } from '../1standalone';
import { Color } from '../3collection/Color';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useLinking, useLinkTo } from '@react-navigation/native';
import { Accomplishment } from '../4pages';

const CustomDrawerContent = (props: any) => {
  const linkTo = useLinkTo();
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
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <CustomIcon name="home" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Color"
        component={Color}
        options={{
          drawerIcon: ({ color }: { color: string }) => (
            <CustomIcon name="invert-colors" color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
