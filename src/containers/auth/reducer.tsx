import { AuthState, AuthAction } from './types';

export const initialState: AuthState = {
  isLoggedIn: false,
  userName: '',
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.actionType) {
    case 'LOGIN': {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userName: action.payload.userName,
      };
    }
    case 'SIGNUP':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userName: action.payload.userName,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userName: '',
      };
    default:
      return state;
  }
};
