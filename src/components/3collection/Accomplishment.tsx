import React, { FC, useMemo } from 'react';
import { Box, Text } from '../../ui';
import { GetAccomplishmentQuery } from '../../types/graphql';
import { prizeReckoner } from '../../helpers/prizeReckoner';

type AccomplishmentProps = {
  accomplishment: GetAccomplishmentQuery;
};

export const Accomplishment: FC<AccomplishmentProps> = ({ accomplishment }) => {
  const { year, month, week } = accomplishment;
  const weeklyAccomplishment = week.aggregate?.count ?? 0;
  const prizeScore = useMemo(() => prizeReckoner(weeklyAccomplishment), [
    weeklyAccomplishment,
  ]);
  const Prize = () => {
    switch (prizeScore) {
      case 3:
        return (
          <Text textAlign="center" fontWeight="bold">
            ✨✨Excellent work! ✨✨
          </Text>
        );
      case 2:
        return <Text textAlign="center">✨Well done! ✨</Text>;
      case 1:
        return <Text textAlign="center">✨Good job! ✨</Text>;
      case 0:
        return <Text textAlign="center">Let's start it today</Text>;
      default:
        return <Text textAlign="center">Let's start it today</Text>;
    }
  };
  const accomplishmentIntervals = [
    {
      interval: '今週',
      count: week.aggregate?.count ?? 0,
    },
    { interval: '今月', count: month.aggregate?.count ?? 0 },
    { interval: '今年', count: year.aggregate?.count ?? 0 },
  ];

  return (
    <Box my={3}>
      {accomplishmentIntervals.map(accomplishmentInterval => {
        return (
          <Box key={accomplishmentInterval.interval}>
            <Text textAlign="center">
              {accomplishmentInterval.interval}
              <Text span>{accomplishmentInterval.count}</Text>タスククリア
            </Text>
          </Box>
        );
      })}
      <Box mt={2}>
        <Prize />
      </Box>
    </Box>
  );
};
