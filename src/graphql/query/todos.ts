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

export const FUTURE_TODOS = gql`
  query FutureTodos($_in: [Int!], $order_by: [todos_order_by!]) {
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

export const PAST_TODOS = gql`
  query PastTodos($_in: [Int!], $order_by: [todos_order_by!]) {
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

export const ACCOMPLISHMENT_AND_GOAL = gql`
  query AccomplishmentAndGoal(
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

export const TODAY_WORKLOAD_TOTAL = gql`
  query TodayWorkloadTotal {
    todos_aggregate(
      where: {
        is_today: { _eq: true }
        completed_at: { _is_null: true }
        deleted_at: { _is_null: true }
      }
    ) {
      aggregate {
        sum {
          workload
        }
      }
    }
  }
`;
