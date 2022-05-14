import { getTableFetch } from "../redux/tableSlice";
import styled from "styled-components";
import Button from "./Button";
import TableComponent from "./TableComponents";
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../redux";

const Table: FC = () => {
  const dataTable = useAppSelector((state) => state.store.data);
  const dispatch = useAppDispatch();

  const getData = () => {
    dispatch(getTableFetch());
  };

  return (
    <TablePink>
      <thead>
        <tr>
          <th>Заголовок</th>
          <th>Текст</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((v) => {
          return (
            <tr key={v.id}>
              <td>{v.title}</td>
              <td>{v.body}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <Button f={getData} />
          </td>
        </tr>
      </tfoot>
    </TablePink>
  );
};

const TablePink = styled(TableComponent)`
  thead {
    background-color: pink;
  }
  tbody {
    tr {
      background-color: rgba(255, 192, 203, 0.1);
    }
  }
`;

export default Table;
