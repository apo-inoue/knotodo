import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import {
  useAllCategoryQuery,
  useInsertCategoryMutation,
} from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { CategorySettingCollection } from '../3collection';
import { useCategoryCtx } from '../../containers/contexts/category';

export const CategorySetting: FC = () => {
  const {
    state: { category },
  } = useCategoryCtx();
  const { data, loading, error } = useAllCategoryQuery();
  const [insertCategory] = useInsertCategoryMutation({
    variables: { category },
  });
  const insertCategoryHandler = () => {
    insertCategory();
  };

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
      <CategorySettingCollection
        categories={data.categories}
        onPress={insertCategoryHandler}
      />
    </Container>
  );
};
