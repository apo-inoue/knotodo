import { gql } from '@apollo/client';

export const INSERT_CATEGORY = gql`
  mutation InsertCategory($title: String!) {
    insert_categories_one(object: { title: $title }) {
      id
      title
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: Int!, $title: String!) {
    update_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: Int!) {
    update_categories_by_pk(
      pk_columns: { id: $id }
      _set: { deleted_at: "now()" }
    ) {
      id
      title
    }
  }
`;
