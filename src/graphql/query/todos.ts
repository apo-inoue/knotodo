import { gql } from '@apollo/client';

export const GET_TODAY_TODOS = gql`
  query getTodayTodos {
    todo(where: { isToday: { _eq: true } }) {
      id
      isToday
      title
    }
  }
`;

export const GET_NOT_TODAY_TODOS = gql`
  query getNotTodayTodos {
    todo(where: { isToday: { _eq: false } }) {
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
