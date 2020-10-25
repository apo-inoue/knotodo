import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { startOfISOWeek, startOfMonth, startOfYear, formatISO } from 'date-fns';
import { useAccomplishmentAndGoalLazyQuery } from '../../types/graphql';
import { Box } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { AccomplishmentAndGoalCollection } from '../3collection';

export const AccomplishmentAndGoal: FC = () => {
  const startWeek = formatISO(startOfISOWeek(new Date()));
  const startMonth = formatISO(startOfMonth(new Date()));
  const startYear = formatISO(startOfYear(new Date()));
  const [
    fetchAccomplishmentAndGoal,
    { error, data },
  ] = useAccomplishmentAndGoalLazyQuery({
    variables: {
      _gte1: startWeek,
      _gte2: startMonth,
      _gte3: startYear,
    },
  });
  const isDrawerOpen = useIsDrawerOpen();
  useFocusEffect(
    useCallback(() => {
      isDrawerOpen && fetchAccomplishmentAndGoal();
    }, [fetchAccomplishmentAndGoal, isDrawerOpen]),
  );

  if (error) {
    return <ErrorMessage />;
  }
  if (data && data.users.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Box>
      <AccomplishmentAndGoalCollection accomplishmentAndGoal={data} />
    </Box>
  );
};
