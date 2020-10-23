import { gql } from '@apollo/client';

export const TODAY_TODOS = gql`
  query TodayTodos($_in: [Int!], $order_by: [todos_order_by!]) {
    todos(
      where: {
        _and: {
          is_today: { _eq: true }
          category_id: { _in: $_in }
          completed_at: { _is_null: true }
          deleted_at: { _is_null: true }
        }
      }
      order_by: $order_by
    ) {
      id
      title
      urgency
      workload
      is_today
      category_id
    }
  }
`;

export const NOT_TODAY_TODOS = gql`
  query NotTodayTodos($_in: [Int!], $order_by: [todos_order_by!]) {
    todos(
      where: {
        is_today: { _eq: false }
        category_id: { _in: $_in }
        completed_at: { _is_null: true }
        deleted_at: { _is_null: true }
      }
      order_by: $order_by
    ) {
      id
      title
      urgency
      workload
      is_today
      category_id
    }
  }
`;

export const COMPLETED_TODOS = gql`
  query CompletedTodos($_in: [Int!], $order_by: [todos_order_by!]) {
    todos(
      where: {
        category_id: { _in: $_in }
        completed_at: { _is_null: false }
        deleted_at: { _is_null: true }
      }
      order_by: $order_by
    ) {
      id
      title
      urgency
      workload
      is_today
      category_id
    }
  }
`;

export const ACCOMPLISHMENT_AND_MESSAGE = gql`
  query AccomplishmentAndMessage(
    $_gte1: timestamptz!
    $_gte2: timestamptz!
    $_gte3: timestamptz!
  ) {
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
    users {
      goal
    }
  }
`;
