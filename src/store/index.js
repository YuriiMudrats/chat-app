import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReduser from "./redusers";
import rootSagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagas);
