import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colorConstants, ColorType } from '../../theme/color';
import { PrimaryButton, Box, FlatList } from '../../ui';
import { ColorSelectItem } from '../2single';
import { useColorCtx } from '../../containers/contexts/color';

export const Color: FC = () => {
  const navigation = useNavigation();
  const { updateColorTypeHandler } = useColorCtx();
  const handlePress = () => {
    updateColorTypeHandler();
    navigation.goBack();
  };

  return (
    <Box width="100%" height="100%">
      <Box flexDirection="column" flexBasis="400px">
        <FlatList<ColorType>
          data={colorConstants}
          keyExtractor={(item: ColorType) => `${item.id}`}
          renderItem={({ item }: { item: ColorType }) => (
            <ColorSelectItem itemColor={item.color} hex={item.hex} />
          )}
        />
      </Box>
      <Box
        flexDirection="column"
        width="100%"
        flex="1 1"
        justifyContent="center"
        alignItems="center">
        <PrimaryButton
          variant="contained"
          stretch
          btnSize="lg"
          width="100%"
          text="設定"
          onPress={handlePress}
        />
      </Box>
    </Box>
  );
};
