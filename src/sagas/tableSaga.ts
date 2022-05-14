import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { getTableSuccess } from "../redux/tableSlice";
import { ITableOne } from "../interface";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableOne[]> = yield call(() =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((response) => response.data)
  );
  yield put(getTableSuccess(dataTable));
}

function* tableSaga() {
  yield takeEvery("store/getTableFetch", workGetTableFetch);
}
export default tableSaga;
