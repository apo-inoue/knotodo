import { gql } from '@apollo/client';

export const INSERT_TODO = gql`
  mutation InsertToDo(
    $isCompleted: Boolean = false
    $title: String = ""
    $urgency: urgency_enum = month
    $isToday: Boolean = true
    $workload: Int = 1
  ) {
    insert_todos_one(
      object: {
        isCompleted: $isCompleted
        isToday: $isToday
        title: $title
        urgency: $urgency
        workload: $workload
      }
    ) {
      __typename
      id
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteToDo($_eq: String!) {
    update_todos(where: { id: { _eq: $_eq } }, _set: { isCompleted: true }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteToDo($_eq: String) {
    delete_todos(where: { id: { _eq: $_eq } }) {
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
