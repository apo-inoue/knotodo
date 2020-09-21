import { gql } from '@apollo/client';

export const TODAY_TODOS = gql`
  query todayTodos {
    todos(where: { isToday: { _eq: true }, isCompleted: { _eq: false } }) {
      id
      isCompleted
      isToday
      title
      urgency
      workload
      category_by_id {
        category
      }
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
      workload
      category_by_id {
        category
      }
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
      workload
      category_by_id {
        category
      }
    }
  }
`;

export const GET_ACCOMPLISHMENT = gql`
  query GetAccomplishment($_gte1: Date, $_gte2: Date, $_gte3: Date) {
    week: todos_aggregate(where: { completed_at: { _gte: $_gte1 } }) {
      aggregate {
        count
      }
    }
    month: todos_aggregate(where: { completed_at: { _gte: $_gte2 } }) {
      aggregate {
        count
      }
    }
    year: todos_aggregate(where: { completed_at: { _gte: $_gte3 } }) {
      aggregate {
        count
      }
    }
  }
`;
