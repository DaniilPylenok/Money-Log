import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootReducer } from "../store/reducers/combine";

export const useTypesSelector: TypedUseSelectorHook<RootReducer> = useSelector;
