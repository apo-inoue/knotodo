import React from 'react';
import { Box, TextForm, Image } from '../../ui';
import { useTodoCtx } from '../../containers/contexts/todo';

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
      />
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require('../../../assets/knot.png')}
      />
    </Box>
  );
};
