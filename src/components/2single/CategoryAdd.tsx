import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Box } from '../../ui/layout/Box';
import { UnderlinedTextForm } from '../../ui/input/TextForm';
import { useCategoryCtx } from '../../containers/contexts/category';

export const CategoryAdd = () => {
  const {
    state: { category },
    categoryInputHandler,
  } = useCategoryCtx();

  return (
    <UnderlinedTextForm
      placeholder="タイトル"
      error={null}
      onChangeText={categoryInputHandler}
      value={category}
    />
  );
};
