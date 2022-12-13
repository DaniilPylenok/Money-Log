import { UserInfo } from "../../types/user";
import { Dispatch } from "redux";
import { UserAction, UserActionType } from "../../types/redux/user";
import api from "../../api/axiosClient";

export const fetchLoginUser = (data: UserInfo) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USER });
      const response = await api.post("/auth/login", {
        ...data,
      });
      dispatch({
        type: UserActionType.FETCH_USER_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const fetchRegisterUser = (data: UserInfo) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USER });
      const response = await api.post("/auth/registration", {
        ...data,
      });
      dispatch({
        type: UserActionType.FETCH_USER_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
