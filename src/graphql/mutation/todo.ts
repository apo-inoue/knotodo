import { gql } from '@apollo/client';

export const INSERT_TODO = gql`
  mutation InsertToDo(
    $title: String = ""
    $urgency: urgency_enum = month
    $workload: Int = 1
    $isToday: Boolean = true
    $isCompleted: Boolean = false
    $category_id: uuid
  ) {
    insert_todos_one(
      object: {
        isCompleted: $isCompleted
        isToday: $isToday
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
    $id: String!
    $title: String
    $urgency: urgency_enum
    $workload: Int
    $category_id: uuid
  ) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: {
        urgency: $urgency
        workload: $workload
        title: $title
        category_id: $category_id
      }
    ) {
      id
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteToDo($_eq: String!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: { isCompleted: true, completed_at: "now()" }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteToDo($_eq: String!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { deleted_at: "now()" }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const SET_TODAY_TODO = gql`
  mutation SetTodayTodo($_eq: String!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { isToday: true }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const SET_NOT_TODAY_TODO = gql`
  mutation SetNotTodayTodo($_eq: String!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { isToday: false }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const RESTORE_NOT_TODAY = gql`
  mutation RestoreNotToday($_eq: String!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: {
        isCompleted: false
        completed_at: null
        isToday: false
        deleted_at: null
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const RESTORE_TODAY = gql`
  mutation RestoreToday($_eq: String!) {
    update_todos(
      where: { id: { _eq: $_eq } }
      _set: {
        isCompleted: false
        completed_at: null
        isToday: true
        deleted_at: null
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
