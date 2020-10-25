import React, { FC } from 'react';
import { Box, RadioButton, Text } from '../../ui';
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
      value: 'WEEK',
    },
    {
      name: '今月',
      value: 'MONTH',
    },
    {
      name: '今年',
      value: 'YEAR',
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly">
      {urgencyIntervals.map(urgencyInterval => {
        const handleSelect = () => {
          urgencySelectHandler(urgencyInterval.value);
        };

        return (
          <Box key={urgencyInterval.name} display="flex" flexDirection="row">
            <RadioButton
              onPress={handleSelect}
              checked={urgency === urgencyInterval.value}
            />
            <Text>{urgencyInterval.name}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
