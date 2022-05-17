import { getTableFetch } from "../../redux/tableSlice";
import { useAppSelector } from "../../redux";
import React, { FC } from "react";
import Table from "../Table/Table";
import TablePink from "./StyledTable";

const TableOne: FC = () => {
  const dataTable = useAppSelector((state) => state.store.data);

  return (
    <TablePink>
      <Table
        titleCol={["Заголовок", "Текст"]}
        dataTable={dataTable}
        sendAxios={() => getTableFetch()}
      />
    </TablePink>
  );
};

export default TableOne;
