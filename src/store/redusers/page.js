import { getMessage } from "../actions";
import { handleActions } from "redux-actions";
import { Record } from "immutable";
let initialState = Record({
  messages: []
});

export const pageState = handleActions(
  {
    [getMessage]: (state, { payload }) => state.set("messages", payload)
  },
  initialState()
);
