import React, { FC } from 'react';
import { PrimaryButton, Box, Touchable } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from '../../ui/input/RadioButton';
import { useColorCtx } from '../../containers/contexts/color';
import { colorConstants } from '../../theme/color';

export const Color: FC = () => {
  const navigation = useNavigation();
  const { color, colorSelectHandler, updateColorTypeHandler } = useColorCtx();
  const handlePress = () => {
    updateColorTypeHandler();
    navigation.goBack();
  };

  return (
    <>
      {colorConstants.map(colorConstant => {
        const { id, hex } = colorConstant;

        return (
          <Touchable
            key={id}
            p={0}
            width="100%"
            onPress={() => colorSelectHandler(colorConstant.color)}>
            <Box mt={4} flexDirection="row" alignItems="center">
              <RadioButton
                radioColor={hex.main}
                checked={colorConstant.color === color}
                text=""
              />
              <Box bg={hex.main} height={32} flex="1 1" />
            </Box>
          </Touchable>
        );
      })}
      <Box
        flexDirection="column"
        flex={1}
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        mb={4}>
        <PrimaryButton
          variant="contained"
          stretch
          btnSize="lg"
          text="設定"
          onPress={handlePress}
        />
      </Box>
    </>
  );
};
