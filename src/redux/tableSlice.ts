import { createSlice } from "@reduxjs/toolkit";
import { ITable, ITableOne, ITableTwo, ITableThree } from "../interface";

const tableSlice = createSlice({
  name: "store",
  initialState: {
    data: [] as ITable[],
    isLoading: false,
    dataTwo: [] as ITable[],
    dataThree: [] as ITable[],
  },
  reducers: {
    getTableFetch: (state) => {
      state.isLoading = true;
    },
    getTableSuccess: (state, action) => {
      state.data = action.payload.map((string: ITableOne) => {
        return { colOne: string.title, colTwo: string.body, id: string.id };
      });
      state.isLoading = false;
    },
    getTableFetchTwo: (state) => {
      state.isLoading = true;
    },
    getTableSuccessTwo: (state, action) => {
      state.dataTwo = action.payload.map((string: ITableTwo) => {
        return { colOne: string.name, colTwo: string.email, id: string.id };
      });
      state.isLoading = false;
    },
    getTableFetchThree: (state) => {
      state.isLoading = true;
    },
    getTableSuccessThree: (state, action) => {
      state.dataThree = action.payload.map((string: ITableThree) => {
        return { colOne: string.name, colTwo: string.body, id: string.id };
      });
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
