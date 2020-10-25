import React, { FC } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { startOfISOWeek, startOfMonth, startOfYear, formatISO } from 'date-fns';
import { useAccomplishmentAndGoalLazyQuery } from '../../types/graphql';
import { Box } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { AccomplishmentAndGoalCollection } from '../3collection';
import { useIgnoreFirstRenderEffect } from '../../helpers/useIgnoreFirstRenderEffect';

export const AccomplishmentAndGoal: FC = () => {
  const startWeek = formatISO(startOfISOWeek(new Date()));
  const startMonth = formatISO(startOfMonth(new Date()));
  const startYear = formatISO(startOfYear(new Date()));
  const [fetch, { error, data }] = useAccomplishmentAndGoalLazyQuery({
    variables: {
      _gte1: startWeek,
      _gte2: startMonth,
      _gte3: startYear,
    },
  });
  const isDrawerOpen = useIsDrawerOpen();
  const fetchOpen = isDrawerOpen ? fetch : () => console.log('hello');
  useIgnoreFirstRenderEffect(fetchOpen);

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
