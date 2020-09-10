import React from 'react';
import { Container } from '../../ui';
import { useAllCategoryQuery, useInsertCategoryMutation } from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { ScreenLoader } from '../../ui/utils/Loader';
import { SettingCollection } from '../3collection';

export const Setting = () => {
  const { data, loading, error } = useAllCategoryQuery();
  const [insertCategory] = useInsertCategoryMutation();
  const insertCategoryHandler = () => {
    insertCategory();
  };

  if (loading) return <ScreenLoader />;
  if (!error) return <ErrorMessage />;
  if (!data) return <NoDataMessage />;

  return (
    <Container>
      <SettingCollection categories={data.categories} onPress={insertCategoryHandler} />
    </Container>
  );
};
