import styled from "styled-components";
import TableComponent from "../Table/TableComponents";

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

export default TablePink;
