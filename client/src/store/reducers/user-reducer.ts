import { UserActionType, UserAction, UserState } from "../../types/redux/user";

const initialState: UserState = {
  user: null,
  loading: false,
  login: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USER:
      return { ...state, loading: true };
    case UserActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        login: true,
        error: null,
      };
    case UserActionType.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
