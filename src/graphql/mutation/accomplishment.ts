import { gql } from '@apollo/client';

export const GET_ACCOMPLISHMENT = gql`
  query GetAccomplishment($_eq: Int = 1) {
    accomplishment(where: { id: { _eq: $_eq } }) {
      id
      year
      month
      week
    }
  }
`;
