import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getTableSuccessTwo } from "../redux/tableSlice";

function* workGetTableFetch() {
  const dataTable = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/users")
  );
  const data = yield dataTable.data;
  yield put(getTableSuccessTwo(data));
}

function* tableSagaTwo() {
  yield takeEvery("store/getTableFetchTwo", workGetTableFetch);
}
export default tableSagaTwo;
