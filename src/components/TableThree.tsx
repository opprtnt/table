import { getTableFetchThree } from "../redux/tableSlice";
import styled from "styled-components";
import Button from "./Button";
import TableComponent from "./TableComponents";
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../redux";

const TableThree: FC = () => {
  const dataTable = useAppSelector((state) => state.store.dataThree);
  const dispatch = useAppDispatch();

  const getData = () => {
    dispatch(getTableFetchThree());
  };

  return (
    <TableGreen>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Сообщение</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((v) => {
          return (
            <tr key={v.id}>
              <td>{v.name}</td>
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
    </TableGreen>
  );
};

const TableGreen = styled(TableComponent)`
  thead {
    background-color: #09f2b1;
  }
  tbody {
    tr {
      background-color: rgba(9, 242, 177, 0.1);
    }
  }
`;

export default TableThree;
