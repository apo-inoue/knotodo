import { gql } from '@apollo/client';

export const USER_COLOR = gql`
  query UserColor {
    users {
      id
      color
    }
  }
`;

export const USER_GOAL = gql`
  query UserGoal {
    users {
      id
      goal
    }
  }
`;
