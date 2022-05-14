import { all } from "redux-saga/effects";
import tableSaga from "./tableSaga";
import tableSagaThree from "./tableSagaThree";
import tableSagaTwo from "./tableSagaTwo";

export default function* rootWatcher() {
  yield all([tableSaga(), tableSagaTwo(), tableSagaThree()]);
}
