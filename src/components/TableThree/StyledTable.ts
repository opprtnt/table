import styled from "styled-components";
import TableComponent from "../Table/TableComponents";

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

export default TableGreen;
