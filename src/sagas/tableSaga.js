import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getTableSuccess } from "../redux/tableSlice";

function* workGetTableFetch() {
  const dataTable = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20")
  );
  const data = yield dataTable.data;
  yield put(getTableSuccess(data));
}

function* tableSaga() {
  yield takeEvery("store/getTableFetch", workGetTableFetch);
}
export default tableSaga;
