import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import createSagaMiddleWare from "redux-saga";
import rootWatcher from "../sagas";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const saga = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    store: tableSlice,
  },
  middleware: [saga],
});
saga.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
