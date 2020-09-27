import React, { FC, useEffect } from 'react';
import { useGetAccomplishmentAndMessageQuery } from '../../types/graphql';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AccomplishmentAndMessageCollection } from '../3collection';
import { Box, Loader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { startOfISOWeek, startOfMonth, startOfYear, formatISO } from 'date-fns';

export const AccomplishmentAndMessage: FC = () => {
  const startWeek = formatISO(startOfISOWeek(new Date()));
  const startMonth = formatISO(startOfMonth(new Date()));
  const startYear = formatISO(startOfYear(new Date()));
  const { loading, error, data, refetch } = useGetAccomplishmentAndMessageQuery(
    {
      variables: {
        _gte1: startWeek,
        _gte2: startMonth,
        _gte3: startYear,
      },
    },
  );
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (isDrawerOpen) {
      refetch();
    }
  }, [isDrawerOpen, refetch]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <NoDataMessage />;
  }

  return (
    <Box>
      <AccomplishmentAndMessageCollection accomplishmentAndMessage={data} />
    </Box>
  );
};