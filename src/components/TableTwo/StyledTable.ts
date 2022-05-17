import styled from "styled-components";
import TableComponent from "../Table/TableComponents";

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

export default TableBlue;
