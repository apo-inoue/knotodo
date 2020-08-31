import { gql } from '@apollo/client';

export const INSERT_CATEGORY = gql`
  mutation InsertCategory($category: String = "") {
    insert_categories_one(object: { category: $category }) {
      category
    }
  }
`;
