import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { getTableSuccessThree } from "../redux/tableSlice";
import { ITableThree } from "../interface";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableThree> = yield call(() =>
    axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=20")
      .then((response) => response.data)
  );
  // const data = yield dataTable.data;
  yield put(getTableSuccessThree(dataTable));
}

function* tableSagaThree() {
  yield takeEvery("store/getTableFetchThree", workGetTableFetch);
}
export default tableSagaThree;
