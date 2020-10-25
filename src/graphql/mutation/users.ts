import { gql } from '@apollo/client';

export const UPDATE_USER_COLOR = gql`
  mutation UpdateUserColor($color: color_enum, $_eq: String) {
    update_users(_set: { color: $color }, where: { auth_id: { _eq: $_eq } }) {
      affected_rows
      returning {
        id
        color
      }
    }
  }
`;

export const UPDATE_USER_GOAL = gql`
  mutation UpdateUserGoal($goal: String, $_eq: String) {
    update_users(_set: { goal: $goal }, where: { auth_id: { _eq: $_eq } }) {
      affected_rows
      returning {
        id
        goal
      }
    }
  }
`;
