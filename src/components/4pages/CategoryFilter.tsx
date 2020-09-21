import React, { FC } from 'react';
import { Container } from '../../ui';
import { useAllCategoryQuery } from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { ScreenLoader } from '../../ui';
import { CategoryFilterCollection } from '../3collection';

export const CategoryFilter: FC = () => {
  const { data, loading, error } = useAllCategoryQuery();

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
    <Container>
      <CategoryFilterCollection categories={data.categories} />
    </Container>
  );
};
