import React, { FC } from 'react';
import { PrimaryButton, Divider, Box } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

type ColorType = {
  id: number;
  color: string;
};

export const Color: FC = () => {
  const navigation = useNavigation();
  const colorTypes: ColorType[] = [
    { id: 1, color: 'brown' },
    { id: 2, color: 'pink' },
    { id: 3, color: 'blue' },
    { id: 4, color: 'grey' },
    { id: 5, color: 'green' },
    { id: 6, color: 'orange' },
  ];

  return (
    <>
      {colorTypes.map((color: ColorType) => {
        return (
          <Box mt={2} key={color.id}>
            <ColorTip color={color.color} />
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
  height: 24px;
  width: 100%;
`;
