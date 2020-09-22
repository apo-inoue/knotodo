import { gql } from '@apollo/client';

export const INSERT_CATEGORY = gql`
  mutation InsertCategory($category: String = "") {
    insert_categories(objects: { category: $category }) {
      returning {
        category
        id
      }
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: uuid!, $category: String) {
    update_categories_by_pk(
      pk_columns: { id: $id }
      _set: { category: $category }
    ) {
      id
      category
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: uuid!) {
    update_categories_by_pk(
      pk_columns: { id: $id }
      _set: { deleted_at: "now()" }
    ) {
      id
      category
    }
  }
`;
