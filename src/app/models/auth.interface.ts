export interface IAuth {
  email: string;
  password: string;
}

export interface IAuthRes {
  msg: string;
  data: {
    access_token: string;
    token_type: string;
    expires_at: number;
  };
}
