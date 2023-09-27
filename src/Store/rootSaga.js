import { all, spawn } from "redux-saga/effects";
import jokeSaga from "../Jokes/Store/saga";
import mathSaga from "../Maths/Store/saga";

function* rootSaga() {
  yield all([spawn(mathSaga), spawn(jokeSaga)]);
}

export default rootSaga;
