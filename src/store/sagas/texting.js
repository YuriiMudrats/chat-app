import { call, put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import io from "socket.io-client";
import { config } from "../../../server/config";
const socket = io.connect(`http://localhost:${config.port}`);

function featchMessage(soketname, data) {
  console.log(socket.emit(soketname, data));
}
function subsciber(socket) {
  return eventChannel(emit => {
    socket.on("chat", data => {
      emit(console.log(data, "emit"));
    });
    return () => {};
  });
}

export function* setMessage({ payload }) {
  try {
    yield call(featchMessage, "chat", payload);
    const channel = yield call(subsciber, socket);
    console.log(channel, "channele");
    while (true) {
      let action = yield take(channel);
      console.log(action, "action");
      yield put(action);
    }
  } catch (error) {
    console.log(error);
  }
}
