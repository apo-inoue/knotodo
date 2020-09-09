import React, { useEffect } from 'react';
import {
  GetAccomplishmentQuery,
  useGetAccomplishmentQuery,
} from '../../types/graphql';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AccomplishmentCollection } from '../3collection';
import { Box } from '../../ui';

export const Accomplishment = () => {
  const { data, refetch } = useGetAccomplishmentQuery();
  const isDrawerOpen = useIsDrawerOpen();
  useEffect(() => {
    if (isDrawerOpen) {
      refetch();
    }
  }, [isDrawerOpen]);

  return (
    <Box>
      <AccomplishmentCollection />
    </Box>
  );
};
