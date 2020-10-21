import { gql } from '@apollo/client';

export const TODAY_TODOS = gql`
  query todayTodos(
    $created_at: order_by = null
    $urgency: order_by = null
    $workload: order_by = null
    $_in: [uuid!]
  ) {
    todos(
      where: {
        _and: {
          is_today: { _eq: true }
          is_completed: { _eq: false }
          deleted_at: { _is_null: true }
          category_id: { _in: $_in }
        }
      }
      order_by: {
        created_at: $created_at
        urgency: $urgency
        workload: $workload
      }
    ) {
      id
      title
      urgency
      workload
      is_completed
      is_today
      category_id
    }
  }
`;

export const NOT_TODAY_TODOS = gql`
  query notTodayTodos(
    $created_at: order_by = null
    $urgency: order_by = null
    $workload: order_by = null
    $_in: [uuid!]
  ) {
    todos(
      where: {
        is_today: { _eq: false }
        is_completed: { _eq: false }
        deleted_at: { _is_null: true }
        category_id: { _in: $_in }
      }
      order_by: {
        created_at: $created_at
        urgency: $urgency
        workload: $workload
      }
    ) {
      id
      title
      urgency
      workload
      is_today
      is_completed
      category_id
    }
  }
`;

export const COMPLETED_TODOS = gql`
  query completedTodos(
    $created_at: order_by = null
    $urgency: order_by = null
    $workload: order_by = null
    $_in: [uuid!]
  ) {
    todos(
      where: {
        is_completed: { _eq: true }
        deleted_at: { _is_null: true }
        category_id: { _in: $_in }
      }
      order_by: {
        created_at: $created_at
        urgency: $urgency
        workload: $workload
      }
    ) {
      id
      title
      urgency
      workload
      is_today
      is_completed
      category_id
    }
  }
`;

export const GET_ACCOMPLISHMENT_AND_MESSAGE = gql`
  query GetAccomplishmentAndMessage(
    $_gte1: timestamptz
    $_gte2: timestamptz
    $_gte3: timestamptz
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
      message
    }
  }
`;
