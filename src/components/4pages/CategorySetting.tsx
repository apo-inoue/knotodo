import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Container, ScreenLoader } from '../../ui';
import {
  useInsertCategoryMutation,
  CategoriesQuery,
} from '../../types/graphql';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import { CategorySettingCollection } from '../3collection';
import { useCategoryCtx } from '../../containers/contexts/category';
import { ALL_CATEGORY } from '../../graphql/query/categories';
import {
  useUpdateCategoryMutation,
  useCategoriesLazyQuery,
  useDeleteCategoryMutation,
} from '../../types/graphql';

export const CategorySetting: FC = () => {
  const {
    state: { category },
  } = useCategoryCtx();
  const [
    fetchCategories,
    { loading, error, data, called },
  ] = useCategoriesLazyQuery();

  useFocusEffect(useCallback(() => fetchCategories(), [fetchCategories]));
  console.log('calledlazy?', called);

  // ------------ insert ------------
  const [insertCategory] = useInsertCategoryMutation({
    variables: { title: category },
    update(cache, { data: updateData }) {
      const existingCategories = cache.readQuery<CategoriesQuery>({
        query: ALL_CATEGORY,
      });
      const newCategory = updateData!.insert_categories_one!;
      const newCategories = [newCategory, ...existingCategories!.categories];
      cache.writeQuery<CategoriesQuery>({
        query: ALL_CATEGORY,
        data: { __typename: 'query_root', categories: newCategories },
      });
    },
  });
  const insertCategoryHandler = () => {
    insertCategory();
  };

  // ------------ delete ------------
  const [deleteCategory] = useDeleteCategoryMutation({
    update(cache, { data: updateData }) {
      const existingCategories = cache.readQuery<CategoriesQuery>({
        query: ALL_CATEGORY,
      });
      const newCategories = existingCategories!.categories.filter(
        c => c.id !== updateData!.update_categories_by_pk!.id,
      );
      cache.writeQuery<CategoriesQuery>({
        query: ALL_CATEGORY,
        data: { __typename: 'query_root', categories: newCategories },
      });
    },
  });
  const deleteCategoryHandler = (id: number) => {
    deleteCategory({
      variables: { id },
      optimisticResponse: {
        __typename: 'mutation_root',
        update_categories_by_pk: {
          __typename: 'categories',
          id: id,
          title: '',
        },
      },
    });
  };
  const [updateCategory] = useUpdateCategoryMutation();
  const updateCategoryHandler = (id: number, title: string) => {
    updateCategory({ variables: { id: id, title: title } });
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
