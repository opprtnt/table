import Button from "../Button/Button";
import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../redux";
import { ITableProps } from "../../interface";

const Table: FC<ITableProps> = ({ titleCol, dataTable, sendAxios }) => {
  const dispatch = useAppDispatch();
  const getData = () => {
    dispatch(sendAxios());
  };
  useEffect(() => getData(), []);

  return (
    <>
      <thead>
        <tr>
          {titleCol.map((title, id) => (
            <th key={title + id}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataTable.map((v) => {
          return (
            <tr key={v.id}>
              <td>{v.colOne}</td>
              <td>{v.colTwo}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <Button sendAxios={getData} />
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default Table;
