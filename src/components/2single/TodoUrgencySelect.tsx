import React, { FC } from 'react';
import { Box, RadioButton, Text } from '../../ui';
import { useTodoCtx } from '../../containers/contexts/todo';
import { Urgency_Enum } from '../../types/graphql';

type UrgencyIntervals = { name: string; value: Urgency_Enum };

export const TodoUrgencySelect: FC = () => {
  const {
    state: { urgency },
    urgencySelectHandler,
  } = useTodoCtx();
  const urgencyIntervals: UrgencyIntervals[] = [
    {
      name: '今週',
      value: 'week',
    },
    {
      name: '今月',
      value: 'month',
    },
    {
      name: '今年',
      value: 'year',
    },
  ];

  return (
    <Box width="100%">
      {urgencyIntervals.map(urgencyInterval => (
        <Box key={urgencyInterval.name} flexDirection="row" mb={1}>
          <RadioButton
            onPress={() => urgencySelectHandler(urgencyInterval.value)}
            checked={urgency === urgencyInterval.value}
          />
          <Box mr={2} />
          <Text>{urgencyInterval.name}</Text>
        </Box>
      ))}
    </Box>
  );
};
