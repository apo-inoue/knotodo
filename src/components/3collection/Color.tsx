import React, { FC } from 'react';
import { PrimaryButton, Divider, Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { RadioButton } from '../../ui/input/RadioButton';
import { ColorTypes_Enum } from '../../types/graphql';

type ColorType = {
  id: number;
  color: ColorTypes_Enum;
};

export const Color: FC = () => {
  const navigation = useNavigation();
  const fetchedColor = 'BRAND';
  const colorTypes: ColorType[] = [
    { id: 1, color: 'BRAND' },
    { id: 2, color: 'BLUE' },
    { id: 3, color: 'GREEN' },
    { id: 4, color: 'ORANGE' },
    { id: 5, color: 'PINK' },
    { id: 6, color: 'GREY' },
  ];
  const colorToHex = (colorType: ColorTypes_Enum) => {
    switch (colorType) {
      case 'BRAND':
        return '#354171';
      case 'BLUE':
        return '#1976d2';
      case 'GREEN':
        return '#00796b';
      case 'ORANGE':
        return '#dd2c00';
      case 'PINK':
        return '#d81b60';
      case 'GREY':
        return '#424242';
    }
  };

  return (
    <>
      {colorTypes.map((colorType: any) => {
        return (
          <Box
            mt={3}
            key={colorType.id}
            flexDirection="row"
            alignItems="center">
            <RadioButton
              // onPress={() => urgencySelectHandler('week')}
              checked={colorType.color === fetchedColor}
              text=""
            />
            <ColorTip color={colorToHex(colorType.color)} />
          </Box>
        );
      })}
      <Divider />
      <PrimaryButton text="検索" onPress={navigation.goBack} />
    </>
  );
};

const ColorTip = styled.View<{ color: string }>`
  background-color: ${props => props.color};
  height: 32px;
  width: 80%;
`;
