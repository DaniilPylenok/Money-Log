import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/combine";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
