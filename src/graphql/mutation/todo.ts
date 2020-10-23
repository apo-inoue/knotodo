import { gql } from '@apollo/client';

export const INSERT_TODO = gql`
  mutation InsertTodo(
    $title: String!
    $urgency: urgency_enum!
    $workload: Int!
    $is_today: Boolean!
    $category_id: Int!
  ) {
    insert_todos_one(
      object: {
        is_today: $is_today
        title: $title
        urgency: $urgency
        workload: $workload
        category_id: $category_id
      }
    ) {
      __typename
      id
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo(
    $id: Int!
    $title: String!
    $urgency: urgency_enum!
    $workload: Int!
    $category_id: Int!
  ) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        urgency: $urgency
        workload: $workload
        category_id: $category_id
      }
    ) {
      id
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteTodo($_eq: Int!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: { completed_at: "now()" }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($_eq: Int!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { deleted_at: "now()" }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const SET_TODAY_TODO = gql`
  mutation SetTodayTodo($_eq: Int!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { is_today: true }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const SET_NOT_TODAY_TODO = gql`
  mutation SetNotTodayTodo($_eq: Int!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { is_today: false }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const RESTORE_NOT_TODAY = gql`
  mutation RestoreNotToday($_eq: Int!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: { completed_at: null, is_today: false, deleted_at: null }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const RESTORE_TODAY = gql`
  mutation RestoreToday($_eq: Int!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: { completed_at: null, is_today: true, deleted_at: null }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
