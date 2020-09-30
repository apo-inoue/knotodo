export type AuthAction =
  | {
      actionType: 'LOGIN';
      payload: {
        token: string;
        userInfo: { id: string; name: string; isNewUser: boolean };
      };
    }
  | { actionType: 'LOGOUT' }
  | { actionType: 'STANDBY' };

export type AuthState = {
  userInfo: {
    id: string;
    name: string;
    isNewUser: boolean;
  };
  token: string | null;
};

export type useAuthContextType = {
  state: AuthState;
  seedDataStandByHandler: () => void;
  handleLogIn: () => Promise<void>;
  handleLogOut: () => void;
};

export type decodedToken = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'https://hasura.io/jwt/claims': any;
  aud: string;
  email: string;
  email_verified: boolean;
  exp: number;
  iat: number;
  iss: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  sub: string;
  updated_at: string;
};
