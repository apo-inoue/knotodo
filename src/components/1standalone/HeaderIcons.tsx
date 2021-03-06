import React, { FC, useMemo } from 'react';
import { Keyboard } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

export const HeaderIconLeft: FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box ml={3}>
      <MaterialCommunityIcons
        name="menu"
        size={24}
        color={theme.colors.white}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
          Keyboard.dismiss();
        }}
      />
    </Box>
  );
};

type HeaderIconsRightProps = {
  isFiltered: boolean;
  onPressSort: () => void;
  onPressFilter: () => void;
};

export const HeaderIconsRight: FC<HeaderIconsRightProps> = ({
  isFiltered,
  onPressSort,
  onPressFilter,
}) => {
  const theme = useTheme();
  const {
    filter: {
      filterState: { isAll },
    },
  } = useSortFilterCtx();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const iconName = useMemo(() => (isAll ? 'filter' : 'filter-plus'), [
    isFiltered,
  ]);

  return (
    <Box flexDirection="row" mr={3}>
      <MaterialCommunityIcons
        name="sort"
        size={24}
        color={theme.colors.white}
        onPress={onPressSort}
      />
      <Box mr={3} />
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color={theme.colors.white}
        onPress={onPressFilter}
      />
    </Box>
  );
};
