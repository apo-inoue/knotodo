import React from 'react';
import { Box, RadioButton } from '../../../ui';
import { useTodoCtx } from '../../../containers/todo/useCtx';

export const Urgency = () => {
  const {
    state: { urgency },
    urgencySelectHandler,
  } = useTodoCtx();

  return (
    <Box width="100%">
      <RadioButton
        onPress={() => urgencySelectHandler('week')}
        checked={urgency === 'week'}
        text="今週中"
      />
      <RadioButton
        onPress={() => urgencySelectHandler('month')}
        checked={urgency === 'month'}
        text="今月中"
      />
      <RadioButton
        onPress={() => urgencySelectHandler('year')}
        checked={urgency === 'year'}
        text="今年中"
      />
    </Box>
  );
};
