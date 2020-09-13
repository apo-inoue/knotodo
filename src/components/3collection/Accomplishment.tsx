import React, { FC, useMemo } from 'react';
import { Box, Text } from '../../ui';
import { Accomplishment as AccomplishmentType } from '../../types/graphql';

type AccomplishmentProps = {
  accomplishment: {
    __typename: 'accomplishment';
  } & Pick<AccomplishmentType, 'id' | 'year' | 'month' | 'week'>;
};

export const Accomplishment: FC<AccomplishmentProps> = ({ accomplishment }) => {
  const { year, month, week } = accomplishment;
  const dailyGoal = useMemo(() => {
    const dayOfTheWeek = new Date().getDay();
    if (dayOfTheWeek === 0) {
      return 21;
    }
    return dayOfTheWeek * 3;
  }, []);

  return (
    <Box mb={3}>
      <Box>
        <Text textAlign="center">
          今週:<Text span>{week}</Text>タスククリア
        </Text>
      </Box>
      <Box mt={2}>
        <Text textAlign="center">
          今月:<Text span>{month}</Text>タスククリア
        </Text>
      </Box>
      <Box mt={2}>
        <Text textAlign="center">
          今年:<Text span>{year}</Text>タスククリア
        </Text>
      </Box>
      {week > dailyGoal && (
        <Box mt={2}>
          <Text textAlign="center">✨WellDone✨</Text>
        </Box>
      )}
    </Box>
  );
};
