import React, { FC } from 'react';
import { Container, ScreenLoader } from '../../ui';
import {
  useAllCategoryQuery,
  useInsertCategoryMutation,
  AllCategoryQuery,
} from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { CategorySettingCollection } from '../3collection';
import { useCategoryCtx } from '../../containers/contexts/category';
import { ALL_CATEGORY } from '../../graphql/query/categories';
import { useUpdateCategoryMutation } from '../../types/graphql';
import { useDeleteCategoryMutation } from '../../types/graphql';

export const CategorySetting: FC = () => {
  const {
    state: { category },
  } = useCategoryCtx();
  const { data, loading, error } = useAllCategoryQuery();
  const [insertCategory] = useInsertCategoryMutation({
    variables: { category },
    update(cache, { data: updateData }) {
      const existingCategories = cache.readQuery<AllCategoryQuery>({
        query: ALL_CATEGORY,
      });
      const newCategory = updateData!.insert_categories!.returning[0];
      const newCategories = [newCategory, ...existingCategories!.categories];
      cache.writeQuery<AllCategoryQuery>({
        query: ALL_CATEGORY,
        data: { __typename: 'query_root', categories: newCategories },
      });
    },
  });
  const insertCategoryHandler = () => {
    insertCategory();
  };
  const [deleteCategory] = useDeleteCategoryMutation({
    update(cache, { data: updateData }) {
      const existingCategories = cache.readQuery<AllCategoryQuery>({
        query: ALL_CATEGORY,
      });
      const newCategories = existingCategories!.categories.filter(
        c => c.id !== updateData!.update_categories_by_pk!.id,
      );
      cache.writeQuery<AllCategoryQuery>({
        query: ALL_CATEGORY,
        data: { __typename: 'query_root', categories: newCategories },
      });
    },
  });
  const deleteCategoryHandler = (id: string) => {
    deleteCategory({
      variables: { id },
      optimisticResponse: {
        __typename: 'mutation_root',
        update_categories_by_pk: {
          __typename: 'categories',
          id: id,
          category: '',
        },
      },
    });
  };
  const [updateCategory] = useUpdateCategoryMutation();
  const updateCategoryHandler = (id: string, c: string) => {
    updateCategory({ variables: { id: id, category: c } });
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data.categories.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <CategorySettingCollection
        categories={data.categories}
        onPress={insertCategoryHandler}
        onDelete={deleteCategoryHandler}
        onUpdate={updateCategoryHandler}
      />
    </Container>
  );
};
