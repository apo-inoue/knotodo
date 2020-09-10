import React from 'react';
import { Box, TextForm } from '../../ui';
import { useTodoCtx } from '../../containers/todo/useCtx';

export const Title = () => {
  const {
    state: { title },
    titleInputHandler,
  } = useTodoCtx();

  return (
    <Box width="100%">
      <TextForm
        label="タイトル"
        error={null}
        onChangeText={titleInputHandler}
        value={title}
        selectionColor={'green'}
      />
    </Box>
  );
};
