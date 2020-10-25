import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text } from '../../ui';
import { AccomplishmentAndGoalQuery } from '../../types/graphql';
import { calcPrize } from '../../helpers/calcPrize';

type AccomplishmentAndGoalProps = {
  accomplishmentAndGoal?: AccomplishmentAndGoalQuery;
};

export const AccomplishmentAndGoal: FC<AccomplishmentAndGoalProps> = ({
  accomplishmentAndGoal,
}) => {
  const theme = useTheme();
  // accomplishment
  const weeklyAccomplishment = accomplishmentAndGoal
    ? accomplishmentAndGoal?.week.aggregate?.count
    : '';
  const monthlyAccomplishment = accomplishmentAndGoal
    ? accomplishmentAndGoal?.month.aggregate?.count
    : '';
  const annuallyAccomplishment = accomplishmentAndGoal
    ? accomplishmentAndGoal?.year.aggregate?.count
    : '';
  const goal = accomplishmentAndGoal ? accomplishmentAndGoal.users[0].goal : '';
  // calcPrize
  const prizeScore = useMemo(
    () =>
      typeof weeklyAccomplishment === 'number' &&
      calcPrize(weeklyAccomplishment),
    [weeklyAccomplishment],
  );

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
        return <Text textAlign="center">今日からはじめよう💪</Text>;
      default:
        return <Text textAlign="center">今日からはじめよう</Text>;
    }
  };
  const accomplishmentIntervals = [
    {
      interval: '今週',
      count: weeklyAccomplishment,
    },
    { interval: '今月', count: monthlyAccomplishment },
    { interval: '今年', count: annuallyAccomplishment },
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
          現在の目標
        </Text>
        <Text textAlign="center">{goal || '未設定'}</Text>
      </Box>
    </Box>
  );
};
