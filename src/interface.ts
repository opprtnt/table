import { MouseEventHandler } from "react";

export interface IButton {
  sendAxios: MouseEventHandler<HTMLButtonElement>;
}

export interface ITableProps {
  titleCol: string[];
  dataTable: ITable[];
  sendAxios: reduxAction;
}

export interface ITable {
  id: number;
  colOne: string;
  colTwo: string;
}

export interface ITableOne extends ITable {
  title: string;
  body: string;
}

export interface ITableThree extends ITable {
  name: string;
  body: string;
}

export interface ITableTwo extends ITable {
  name: string;
  email: string;
}

type reduxAction = () => {
  payload: undefined;
  type: string;
};
