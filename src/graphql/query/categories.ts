import { gql } from '@apollo/client';

export const ALL_CATEGORY = gql`
  query AllCategory {
    categories {
      category
      id
    }
  }
`;
