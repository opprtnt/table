import styled from "styled-components";

const TableComponent = styled.table`
  width: 30%;
  height: fit-content;
  thead {
    th {
      width: 50%;
    }
  }
  tbody {
    td {
      vertical-align: top;
    }
    tr:nth-child(2n) {
      background-color: white;
    }
  }
`;

export default TableComponent;
