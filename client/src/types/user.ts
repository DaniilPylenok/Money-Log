export interface IUser {
  username: string;
  id: string;
}

export interface UserInfo {
  username: string;
  password: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
  username: string;
}

export interface AuthData {
  username: string;
  refresh_token: string;
}
