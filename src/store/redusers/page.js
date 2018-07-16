import { handleActions } from "redux-actions";
import { Record } from "immutable";

import { getMessage } from "../actions";

let initialState = Record({
  messages: []
});

export const pageState = handleActions(
  {
    [getMessage]: (state, { payload }) => state.set("messages", payload)
  },
  initialState()
);
