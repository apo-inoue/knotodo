import React, { FC } from 'react';
import { Box } from '../../ui';
import { useCategoriesQuery } from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { ScreenLoader } from '../../ui';
import { CategoryFilterCollection } from '../3collection';

type CategoryFilterProps = {
  filterModalToggler: () => void;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
  filterModalToggler,
}) => {
  const { data, loading, error } = useCategoriesQuery();

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
      <CategoryFilterCollection
        categories={data.categories}
        filterModalToggler={filterModalToggler}
      />
    </Box>
  );
};
