import { useDispatch, useSelector } from "react-redux";
import { getTableFetchTwo } from "../redux/tableSlice";
import styled from "styled-components";
import Button from "./Button";
import TableComponent from "./TableComponents";

const TableTwo = () => {
  const dataTable = useSelector((state) => state.store.dataTwo);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getTableFetchTwo());
  };

  return (
    <TableBlue>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((v) => {
          return (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.email}</td>
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
    </TableBlue>
  );
};

const TableBlue = styled(TableComponent)`
  thead {
    background-color: #35dcf4;
  }
  tbody {
    tr {
      background-color: rgba(53, 220, 244, 0.1);
    }
  }
`;

export default TableTwo;