import { gql } from '@apollo/client';

export const UPDATE_COLOR_TYPE = gql`
  mutation UpdateColorType($color_type: colorTypes_enum, $_eq: String) {
    update_users(
      _set: { color_type: $color_type }
      where: { id: { _eq: $_eq } }
    ) {
      affected_rows
      returning {
        id
        color_type
      }
    }
  }
`;

export const UPDATE_USER_MESSAGE = gql`
  mutation UpdateUserMessage($message: String, $_eq: String) {
    update_users(_set: { message: $message }, where: { id: { _eq: $_eq } }) {
      affected_rows
      returning {
        id
        message
      }
    }
  }
`;
