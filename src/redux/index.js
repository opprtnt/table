import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import createSagaMiddleWare from "redux-saga";
import rootWatcher from "../sagas";

const saga = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    store: tableSlice,
  },
  middleware: [saga],
});
saga.run(rootWatcher);
