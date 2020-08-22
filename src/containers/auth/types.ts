export type AuthAction =
  | {
      actionType: 'LOGIN';
      payload: { token: string; userInfo: { id: string; name: string; isNewUser: boolean } };
    }
  | { actionType: 'LOGOUT' };

export type AuthState = {
  isLoggedIn: boolean;
  userInfo: {
    id: string;
    name: string;
    isNewUser: boolean;
  };
  token: string;
};

export type useAuthContextType = {
  state: AuthState;
  handleLogIn: () => Promise<void>;
  handleLogOut: () => void;
};

// LOGIN_SUCCEED: 'LOGIN_SUCCEED',
// LOGIN_FAILED: 'LOGIN_FAILS',
// LOGOUT: 'LOGOUT',
// SIGNUP_FAILED: 'SIGNUP_FAILED',
// CLEAN_AUTH_STATE: 'CLEAN_AUTH_STATE',
