import { getTableFetchTwo } from "../../redux/tableSlice";
import { useAppSelector } from "../../redux";
import React, { FC } from "react";
import Table from "../Table/Table";
import TableBlue from "./StyledTable";

const TableTwo: FC = () => {
  const dataTable = useAppSelector((state) => state.store.dataTwo);

  return (
    <TableBlue>
      <Table
        titleCol={["Имя", "Email"]}
        dataTable={dataTable}
        sendAxios={() => getTableFetchTwo()}
      />
    </TableBlue>
  );
};

export default TableTwo;
