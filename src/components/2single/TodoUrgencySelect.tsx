import React, { FC } from 'react';
import { Box, RadioButton, Text } from '../../ui';
import { useTodoCtx } from '../../containers/contexts/todo';
import { Urgency_Enum } from '../../types/graphql';

type TodoUrgencySelectProps = {
  urgency: Urgency_Enum;
  urgencySelectHandler: (urgency: Urgency_Enum) => void;
};
type UrgencyIntervals = { name: string; value: Urgency_Enum };

export const TodoUrgencySelect: FC<TodoUrgencySelectProps> = ({
  urgency,
  urgencySelectHandler,
}) => {
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
      {urgencyIntervals.map(urgencyInterval => {
        const handleSelect = () => {
          urgencySelectHandler(urgencyInterval.value);
        };

        <Box key={urgencyInterval.name} flexDirection="row" mb={1}>
          <RadioButton
            onPress={handleSelect}
            checked={urgency === urgencyInterval.value}
          />
          <Box mr={2} />
          <Text>{urgencyInterval.name}</Text>
        </Box>;
      })}
    </Box>
  );
};
