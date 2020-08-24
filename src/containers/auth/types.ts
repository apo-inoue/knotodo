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
    isNewUser: boolean | undefined;
  };
  token: string | null;
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

export type decodedToken = {
  aud: string;
  email: string;
  email_verified: boolean;
  exp: number;
  https: any;
  iat: number;
  iss: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  sub: string;
  updated_at: string;
};
