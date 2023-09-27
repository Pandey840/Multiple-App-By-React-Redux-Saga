import { call, put, takeLatest } from "redux-saga/effects";
import Action from "../Store/action";
import { fetchMathApi } from "../../Api";

function* fetchFactWorkerSaga() {
  try {
    const fact = yield call(fetchMathApi);

    yield put({
      type: Action.FETCH_FACT_SUCCESS,
      payload: { fact: fact, successMessage: "Fact fetch successful" },
    });
  } catch (e) {
    yield put({
      type: Action.FETCH_FACT_ERROR,
      payload: { errorMessage: e.message },
    });
  }
}

function* mathSaga() {
  yield takeLatest(Action.FETCH_FACT, fetchFactWorkerSaga);
}

export default mathSaga;
