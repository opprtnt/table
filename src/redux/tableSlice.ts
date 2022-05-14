import { createSlice } from "@reduxjs/toolkit";
import { ITableOne, ITableThree, ITableTwo } from "../interface";

const tableSlice = createSlice({
  name: "store",
  initialState: {
    data: [] as ITableOne[],
    isLoading: false,
    dataTwo: [] as ITableTwo[],
    dataThree: [] as ITableThree[],
  },
  reducers: {
    getTableFetch: (state) => {
      state.isLoading = true;
    },
    getTableSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getTableFetchTwo: (state) => {
      state.isLoading = true;
    },
    getTableSuccessTwo: (state, action) => {
      state.dataTwo = action.payload;
      state.isLoading = false;
    },
    getTableFetchThree: (state) => {
      state.isLoading = true;
    },
    getTableSuccessThree: (state, action) => {
      state.dataThree = action.payload;
      state.isLoading = false;
    },
    getTableFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getTableFetch,
  getTableSuccess,
  getTableFailure,
  getTableSuccessTwo,
  getTableFetchTwo,
  getTableFetchThree,
  getTableSuccessThree,
} = tableSlice.actions;

export default tableSlice.reducer;
