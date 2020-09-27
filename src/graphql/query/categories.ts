import { gql } from '@apollo/client';

export const ALL_CATEGORY = gql`
  query AllCategory {
    categories {
      __typename
      category
      id
    }
  }
`;
