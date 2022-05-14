import { MouseEventHandler } from "react";

export interface IButton {
  f: MouseEventHandler<HTMLButtonElement>;
}

export interface ITableOne {
  id: number;
  title: string;
  body: string;
}

export interface ITableThree {
  id: number;
  name: string;
  body: string;
}

export interface ITableTwo {
  id: number;
  name: string;
  email: string;
}
