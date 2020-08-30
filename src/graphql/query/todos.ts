import { gql } from '@apollo/client';

export const TODAY_TODOS = gql`
  query todayTodos {
    todos(where: { isToday: { _eq: true }, isCompleted: { _eq: false } }) {
      id
      isCompleted
      isToday
      title
      urgency
    }
  }
`;

export const NOT_TODAY_TODOS = gql`
  query notTodayTodos {
    todos(where: { isToday: { _eq: false }, isCompleted: { _eq: false } }) {
      id
      isCompleted
      isToday
      title
      urgency
    }
  }
`;

export const COMPLETED_TODOS = gql`
  query completedTodos {
    todos(where: { isCompleted: { _eq: true } }) {
      id
      isCompleted
      isToday
      title
      urgency
    }
  }
`;
