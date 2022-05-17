import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getTableSuccessTwo } from "../redux/tableSlice";
import { ITableTwo } from "../interface";
import getDataTable from "../axios/getDataTable";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableTwo> = yield call(() =>
    getDataTable("https://jsonplaceholder.typicode.com/users")
  );
  yield put(getTableSuccessTwo(dataTable));
}

function* tableSagaTwo() {
  yield takeEvery("store/getTableFetchTwo", workGetTableFetch);
}
export default tableSagaTwo;
