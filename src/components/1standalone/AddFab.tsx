import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { FAB } from '../../ui/button/FAB';
import { useTheme } from 'styled-components';
import { TouchableProps } from '../../ui/button/Touchable';

export const AddFab: FC<TouchableProps> = props => {
  const theme = useTheme();

  return (
    <FAB {...props}>
      <FontAwesome name="plus" size={25} color={theme.colors.white} />
    </FAB>
  );
};
