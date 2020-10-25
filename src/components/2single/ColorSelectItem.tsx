import React, { FC } from 'react';
import { Touchable, RadioButton, Box } from '../../ui';
import { useColorCtx } from '../../containers/contexts/color';
import { Color_Enum } from '../../types/graphql';
import { useTheme } from 'styled-components';

type ColorSelectItemProps = {
  itemColor: Color_Enum;
  hex: {
    light: string;
    main: string;
    dark: string;
  };
};

export const ColorSelectItem: FC<ColorSelectItemProps> = ({
  itemColor,
  hex,
}) => {
  const theme = useTheme();
  const { color, colorSelectHandler } = useColorCtx();

  return (
    <Touchable p={0} width="100%" onPress={() => colorSelectHandler(itemColor)}>
      <Box mt={4} flexDirection="row" alignItems="center">
        <Box
          bg={hex.main}
          height={32}
          flex="1 1"
          style={{
            borderRadius: theme.radii[2],
          }}
        />
        <Box
          pl={3}
          style={{
            borderRadius: theme.radii[2],
          }}>
          <RadioButton
            radioColor={hex.main}
            checked={itemColor === color}
            onPress={() => colorSelectHandler(itemColor)}
          />
        </Box>
      </Box>
    </Touchable>
  );
};
