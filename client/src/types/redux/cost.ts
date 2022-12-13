import { ICost } from "../cost";

export interface CostState {
  costs: ICost[];
  loading: boolean;
  error: null | string;
}

export enum CostActionType {
  FETCH_COST = "FETCH_COST",
  FETCH_COST_SUCCESS = "FETCH_COST_SUCCESS",
  FETCH_COST_ERROR = "FETCH_COST_ERROR",
}

interface FetchCostAction {
  type: CostActionType.FETCH_COST;
}

interface FetchCostSuccessAction {
  type: CostActionType.FETCH_COST_SUCCESS;
  payload: ICost[];
}

interface FetchCostErrorAction {
  type: CostActionType.FETCH_COST_ERROR;
  payload: string;
}

export type CostAction =
  | FetchCostAction
  | FetchCostSuccessAction
  | FetchCostErrorAction;
