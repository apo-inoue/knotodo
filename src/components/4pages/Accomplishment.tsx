import React, { useEffect } from 'react';
import {
  GetAccomplishmentQuery,
  useGetAccomplishmentQuery,
} from '../../types/graphql';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AccomplishmentCollection } from '../3collection';
import { Box } from '../../ui';
import { Loader } from '../../ui/utils/Loader';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';

export const Accomplishment = () => {
  const { loading, error, data, refetch } = useGetAccomplishmentQuery();
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (isDrawerOpen) {
      refetch();
    }
  }, [isDrawerOpen]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  return (
    <Box>
      <AccomplishmentCollection accomplishment={data.accomplishment[0]} />
    </Box>
  );
};