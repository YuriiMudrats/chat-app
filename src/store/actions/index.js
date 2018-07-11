import { createAction } from "redux-actions";

export const sendMessage = createAction(
  "SET_DATA_TO_SERVER",
  payload => payload
);

export const getMessage = createAction("SET_DATA_TO_STORE", payload => payload);
