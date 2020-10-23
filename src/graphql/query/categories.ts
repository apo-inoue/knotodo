import { gql } from '@apollo/client';

export const ALL_CATEGORY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`;
