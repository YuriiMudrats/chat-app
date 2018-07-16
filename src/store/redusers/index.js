import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { pageState } from "./page";

const rootReduser = combineReducers({ pageState, form: formReducer });

export default rootReduser;
