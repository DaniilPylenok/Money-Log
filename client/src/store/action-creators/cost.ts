import { Dispatch } from "redux";
import { CostInfo } from "../../types/cost";
import { CostAction, CostActionType } from "../../types/redux/cost";
import api from "../../api/axiosClient";
import { Tokens } from "../../types/user";

export const fetchNewCost = (data: CostInfo) => {
  return async (dispatch: Dispatch<CostAction>) => {
    try {
      dispatch({ type: CostActionType.FETCH_COST });
      const response = await api.post("/cost", data);
      dispatch({
        type: CostActionType.FETCH_COST_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: CostActionType.FETCH_COST_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const fetchGetCost = () => {
  return async (dispatch: Dispatch<CostAction>) => {
    try {
      dispatch({ type: CostActionType.FETCH_COST });
      const userToken: Tokens = JSON.parse(
        localStorage.getItem("userInfo") || "{}"
      );
      const response = await api.get("/cost", {
        headers: { Authorization: `Bearer ${userToken.access_token}` },
      });
      dispatch({
        type: CostActionType.FETCH_COST_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: CostActionType.FETCH_COST_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const fetchUpdateCost = (data: CostInfo) => {
  return async (dispatch: Dispatch<CostAction>) => {
    try {
      dispatch({ type: CostActionType.FETCH_COST });
      const response = await api.patch(`/cost/${data.id}`, {
        ...data,
      });
      dispatch({
        type: CostActionType.FETCH_COST_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: CostActionType.FETCH_COST_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const fetchDeleteCost = (data: CostInfo) => {
  return async (dispatch: Dispatch<CostAction>) => {
    try {
      dispatch({ type: CostActionType.FETCH_COST });
      const response = await api.delete(`/cost/${data.id}`);
      dispatch({
        type: CostActionType.FETCH_COST_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: CostActionType.FETCH_COST_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
