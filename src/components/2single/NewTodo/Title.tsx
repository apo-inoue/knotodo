import React, { useState } from 'react';
import { Box, TextForm } from '../../../ui';

export const Title = () => {
  const [title, setTitle] = useState('');
  const titleInputHandler = (text: string) => {
    setTitle(text);
  };

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
