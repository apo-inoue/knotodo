import React, { FC } from 'react';
import { PrimaryButton, Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
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
          <Box mt={3} key={id} flexDirection="row" alignItems="center">
            <RadioButton
              radioColor={hex.main}
              onPress={() => colorSelectHandler(colorConstant.color)}
              checked={colorConstant.color === color}
              text=""
            />
            <ColorTip color={hex.main} />
          </Box>
        );
      })}
      <Box mt={5} width="60%" mx="auto">
        <PrimaryButton
          variant="contained"
          btnSize="lg"
          text="設定"
          onPress={handlePress}
        />
      </Box>
    </>
  );
};

const ColorTip = styled.View<{ color: string }>`
  background-color: ${props => props.color};
  height: 32px;
  width: 80%;
`;
