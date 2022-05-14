import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { getTableSuccessTwo } from "../redux/tableSlice";
import { ITableTwo } from "../interface";

function* workGetTableFetch() {
  const dataTable: AxiosResponse<ITableTwo> = yield call(() =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );
  yield put(getTableSuccessTwo(dataTable));
}

function* tableSagaTwo() {
  yield takeEvery("store/getTableFetchTwo", workGetTableFetch);
}
export default tableSagaTwo;
