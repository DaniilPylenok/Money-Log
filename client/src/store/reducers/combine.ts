import { combineReducers } from "redux";
import { costReducer } from "./cost-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cost: costReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
