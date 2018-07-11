import { combineReducers } from "redux";
import { pageState } from "./page";
import { reducer as formReducer } from "redux-form";
const rootReduser = combineReducers({ pageState, form: formReducer });

export default rootReduser;
