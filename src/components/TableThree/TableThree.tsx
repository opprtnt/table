import { getTableFetchThree } from "../../redux/tableSlice";
import React, { FC } from "react";
import { useAppSelector } from "../../redux";
import TableGreen from "./StyledTable";
import Table from "../Table/Table";

const TableThree: FC = () => {
  const dataTable = useAppSelector((state) => state.store.dataThree);
  return (
    <TableGreen>
      <Table
        titleCol={["Заголовок", "Текст"]}
        dataTable={dataTable}
        sendAxios={() => getTableFetchThree()}
      />
    </TableGreen>
  );
};

export default TableThree;
