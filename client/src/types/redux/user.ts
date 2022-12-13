import { IUser } from "../user";

export interface UserState {
  user: IUser | null;
  loading: boolean;
  login: boolean;
  error: null | string;
}

export enum UserActionType {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface FetchUserAction {
  type: UserActionType.FETCH_USER;
}

interface FetchUserSuccessAction {
  type: UserActionType.FETCH_USER_SUCCESS;
  payload: IUser;
}

interface FetchUserErrorAction {
  type: UserActionType.FETCH_USER_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
