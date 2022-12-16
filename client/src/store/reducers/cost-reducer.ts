import { CostAction, CostState, CostActionType } from "../../types/redux/cost";

const initialState: CostState = {
  costs: [],
  loading: false,
  error: null,
};

export const costReducer = (
  state = initialState,
  action: CostAction
): CostState => {
  switch (action.type) {
    case CostActionType.FETCH_COST:
      return { ...state, loading: true };
    case CostActionType.FETCH_COST_SUCCESS:
      return {
        ...state,
        loading: false,
        costs: action.payload,
        error: null,
      };
    case CostActionType.FETCH_COST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
