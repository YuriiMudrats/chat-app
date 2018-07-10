import { combineReducers } from "redux";
import page from "./page";
import { reducer as formReducer } from "redux-form";
const rootReduser = combineReducers({ page, form: formReducer });

export default rootReduser;
