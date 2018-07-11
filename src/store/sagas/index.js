import { takeEvery } from "redux-saga/effects";
import { all, fork } from "redux-saga/effects";
import { setMessage } from "./texting";
import { sendMessage } from "../actions";

export default function* rootSagas() {
  yield all([fork(watchetMessage)]);
}

function* watchetMessage() {
  yield takeEvery(sendMessage, setMessage);
}
