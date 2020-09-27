import { AuthState, AuthAction } from '../types/auth';

export const initialState: AuthState = {
  token: null,
  userInfo: {
    id: '',
    name: '',
    isNewUser: false,
  },
};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.actionType) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.payload.token,
        userInfo: {
          id: action.payload.userInfo.id,
          name: action.payload.userInfo.name,
          isNewUser: action.payload.userInfo.isNewUser,
        },
      };
    }
    case 'LOGOUT':
      return {
        ...state,
        token: '',
        userInfo: {
          id: '',
          name: '',
          isNewUser: false,
        },
      };
    case 'STANDBY':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          isNewUser: false,
        },
      };
    default:
      return state;
  }
};
