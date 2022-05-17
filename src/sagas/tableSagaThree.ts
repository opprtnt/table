import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getTableSuccessThree } from "../redux/tableSlice";
import { ITableThree } from "../interface";
import getDataTable from "../axios/getDataTable";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableThree> = yield call(() =>
    getDataTable("https://jsonplaceholder.typicode.com/comments?_limit=20")
  );
  // const data = yield dataTable.data;
  yield put(getTableSuccessThree(dataTable));
}

function* tableSagaThree() {
  yield takeEvery("store/getTableFetchThree", workGetTableFetch);
}
export default tableSagaThree;
