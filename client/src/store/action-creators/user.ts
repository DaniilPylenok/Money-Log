import { Dispatch } from "redux";
import { AuthData, UserInfo } from "../../types/user";
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
      localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify(response.data));
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
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const fetchAuthUser = (data: AuthData) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USER });
      const response = await api.post("/auth/refresh", {
        ...data,
      });
      dispatch({
        type: UserActionType.FETCH_USER_SUCCESS,
        payload: response.data,
      });
      localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
