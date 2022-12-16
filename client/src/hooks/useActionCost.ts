import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as CostActionCreator from "../store/action-creators/cost";

export const useActionsCost = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CostActionCreator, dispatch);
};
