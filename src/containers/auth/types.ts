export type AuthAction =
  | { actionType: 'SIGNUP'; payload: { isLoggedIn: boolean; userName: string } }
  | { actionType: 'LOGIN'; payload: { isLoggedIn: boolean; userName: string } }
  | { actionType: 'LOGOUT' };

export type AuthState = {
  isLoggedIn: boolean;
  userName: string;
};

export type useAuthContextType = {
  state: AuthState;
  logIn: () => void;
  logOut: () => void;
  signUp: () => void;
};

// LOGIN_SUCCEED: 'LOGIN_SUCCEED',
// LOGIN_FAILED: 'LOGIN_FAILS',
// LOGOUT: 'LOGOUT',
// SIGNUP_FAILED: 'SIGNUP_FAILED',
// CLEAN_AUTH_STATE: 'CLEAN_AUTH_STATE',
