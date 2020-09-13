import { gql } from '@apollo/client';

export const GET_COLOR_TYPE = gql`
  query GetColorType {
    users {
      id
      color_type
    }
  }
`;
