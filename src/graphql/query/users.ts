import { gql } from '@apollo/client';

export const GET_COLOR_TYPE = gql`
  query GetColorType {
    users {
      id
      color_type
      message
    }
  }
`;

export const GET_USER_MESSAGE = gql`
  query GetUserMessage {
    users {
      id
      message
    }
  }
`;
