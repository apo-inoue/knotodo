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
          isToday: { _eq: true }
          isCompleted: { _eq: false }
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
      isCompleted
      isToday
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
        isToday: { _eq: false }
        isCompleted: { _eq: false }
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
      isToday
      isCompleted
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
        isCompleted: { _eq: true }
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
      isToday
      isCompleted
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
