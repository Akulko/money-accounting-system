import { combineReducers } from "redux";
import reducer from "./modules/transactions/reducer";

export default combineReducers({
  data: reducer
});
