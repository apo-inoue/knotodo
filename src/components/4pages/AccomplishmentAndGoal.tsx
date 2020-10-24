import React, { FC, useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { startOfISOWeek, startOfMonth, startOfYear, formatISO } from 'date-fns';
import { useAccomplishmentAndGoalQuery } from '../../types/graphql';
import { Box, Loader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { AccomplishmentAndGoalCollection } from '../3collection';

export const AccomplishmentAndGoal: FC = () => {
  const startWeek = formatISO(startOfISOWeek(new Date()));
  const startMonth = formatISO(startOfMonth(new Date()));
  const startYear = formatISO(startOfYear(new Date()));
  const { loading, error, data, refetch } = useAccomplishmentAndGoalQuery({
    variables: {
      _gte1: startWeek,
      _gte2: startMonth,
      _gte3: startYear,
    },
  });
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (isDrawerOpen) {
      refetch();
    }
  }, [isDrawerOpen, refetch]);

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data.users.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Box>
      <AccomplishmentAndGoalCollection accomplishmentAndGoal={data} />
    </Box>
  );
};
