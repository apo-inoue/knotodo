import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text } from '../../ui';
import { GetAccomplishmentAndMessageQuery } from '../../types/graphql';
import { prizeReckoner } from '../../helpers/prizeReckoner';

type AccomplishmentAndMessageProps = {
  accomplishmentAndMessage: GetAccomplishmentAndMessageQuery;
};

export const AccomplishmentAndMessage: FC<AccomplishmentAndMessageProps> = ({
  accomplishmentAndMessage,
}) => {
  const theme = useTheme();
  const { year, month, week } = accomplishmentAndMessage;
  const { message } = accomplishmentAndMessage.users[0];
  const weeklyAccomplishment = week.aggregate?.count ?? 0;
  const prizeScore = useMemo(() => prizeReckoner(weeklyAccomplishment), [
    weeklyAccomplishment,
  ]);
  const Prize = () => {
    switch (prizeScore) {
      case 3:
        return (
          <Text textAlign="center" fontWeight="bold">
            ✨✨素晴らしい生産性です! ✨✨
          </Text>
        );
      case 2:
        return <Text textAlign="center">✨非常に好い調子です! ✨</Text>;
      case 1:
        return <Text textAlign="center">✨いい調子です✨</Text>;
      case 0:
        return <Text textAlign="center">今日からはじめよう</Text>;
      default:
        return <Text textAlign="center">今日からはじめよう</Text>;
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
      <Box mt={4}>
        <Text textAlign="center" color={theme.colors.blacks[7]}>
          ヒトコト
        </Text>
        <Text textAlign="center">{message ? message : '未設定'}</Text>
      </Box>
    </Box>
  );
};
