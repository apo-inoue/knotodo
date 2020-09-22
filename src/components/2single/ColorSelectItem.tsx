import React, { FC } from 'react';
import { Touchable, RadioButton, Box } from '../../ui';
import { useColorCtx } from '../../containers/contexts/color';
import { ColorTypes_Enum } from '../../types/graphql';
import { useTheme } from 'styled-components';

type ColorSelectItemProps = {
  itemColor: ColorTypes_Enum;
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
          pl={2}
          bg={theme.colors.blacks[3]}
          style={{
            borderBottomStartRadius: theme.radii[1],
            borderTopStartRadius: theme.radii[1],
          }}>
          <RadioButton
            radioColor={hex.main}
            checked={itemColor === color}
            text=""
            onPress={() => colorSelectHandler(itemColor)}
          />
        </Box>
        <Box
          bg={hex.main}
          height={32}
          flex="1 1"
          style={{
            borderBottomEndRadius: theme.radii[1],
            borderTopEndRadius: theme.radii[1],
          }}
        />
      </Box>
    </Touchable>
  );
};
