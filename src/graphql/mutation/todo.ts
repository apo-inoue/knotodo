import { gql } from '@apollo/client';

export const CREATE_TODAY_TODO = gql`
  mutation createTodayTodo {
    insert_todos(objects: { title: "kk", urgency: month, isToday: true }) {
      affected_rows
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteToDo($_eq: String = "") {
    update_todos(where: { id: { _eq: $_eq } }, _set: { isCompleted: true }) {
      affected_rows
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteToDo($_eq: String = "") {
    delete_todos(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

export const SET_TODAY_TODO = gql`
  mutation SetTodayTodo($_eq: String = "") {
    update_todos(where: { id: { _eq: $_eq } }, _set: { isToday: true }) {
      affected_rows
    }
  }
`;
