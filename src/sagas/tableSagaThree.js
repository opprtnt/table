import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getTableSuccessThree } from "../redux/tableSlice";

function* workGetTableFetch() {
  const dataTable = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=20")
  );
  const data = yield dataTable.data;
  yield put(getTableSuccessThree(data));
}

function* tableSagaThree() {
  yield takeEvery("store/getTableFetchThree", workGetTableFetch);
}
export default tableSagaThree;
