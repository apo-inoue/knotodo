import React, { FC } from 'react';
import { UnderlinedTextForm } from '../../ui';
import { useCategoryCtx } from '../../containers/contexts/category';

export const CategoryAdd: FC = () => {
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
