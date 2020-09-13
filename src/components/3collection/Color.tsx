import React, { FC } from 'react';
import { PrimaryButton, Divider, Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { RadioButton } from '../../ui/input/RadioButton';
import { useColorCtx } from '../../containers/color/useCtx';
import { colorPalettes } from '../../containers/color/provider';

export const Color: FC = () => {
  const navigation = useNavigation();
  const { color, colorSelectHandler, updateColorTypeHandler } = useColorCtx();
  const handlePress = () => {
    updateColorTypeHandler();
    navigation.goBack();
  };

  return (
    <>
      {colorPalettes.map(colorType => {
        return (
          <Box
            mt={3}
            key={colorType.id}
            flexDirection="row"
            alignItems="center">
            <RadioButton
              radioColor={colorType.hex.main}
              onPress={() => colorSelectHandler(colorType.color)}
              checked={colorType.color === color}
              text=""
            />
            <ColorTip color={colorType.hex.main} />
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
