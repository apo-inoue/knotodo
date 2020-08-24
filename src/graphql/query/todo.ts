import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query getTodos($isToday: Boolean) {
    todo(where: { isToday: { _eq: $isToday } }) {
      id
      isToday
      title
    }
  }
`;

export const GET_ALL_TODOS = gql`
  query getAllTodos {
    todo {
      id
      isToday
      title
    }
  }
`;
