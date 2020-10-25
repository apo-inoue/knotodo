import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Box } from '../../ui';
import { useCategoriesLazyQuery } from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { ScreenLoader } from '../../ui';
import { ModalFilterCollection } from '../3collection';

type ModalFilterProps = {
  filterModalToggler: () => void;
};

export const ModalFilter: FC<ModalFilterProps> = ({ filterModalToggler }) => {
  const [fetchCategories, { data, loading, error }] = useCategoriesLazyQuery();

  useFocusEffect(useCallback(() => fetchCategories(), [fetchCategories]));

  if (loading) {
    return <ScreenLoader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!data) {
    return <NoDataMessage />;
  }

  return (
    <Box bg="white" py={4} px={3}>
      <ModalFilterCollection
        categories={data.categories}
        filterModalToggler={filterModalToggler}
      />
    </Box>
  );
};
