import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getTableSuccess } from "../redux/tableSlice";
import { ITableOne } from "../interface";
import getDataTable from "../axios/getDataTable";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableOne[]> = yield call(() =>
    getDataTable("https://jsonplaceholder.typicode.com/posts?_limit=20")
  );
  yield put(getTableSuccess(dataTable));
}

function* tableSaga() {
  yield takeEvery("store/getTableFetch", workGetTableFetch);
}
export default tableSaga;
