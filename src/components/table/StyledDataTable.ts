import styled from "styled-components";

const StyledDataTable = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin-bottom: 5rem;
  overflow: auto;

  tr {
    border-bottom: 1px solid black;
  }

  td {
    vertical-align: bottom;
    text-align: center;
    padding: 0.5rem 2rem;
  }

  th {
    vertical-align: bottom;
    text-align: center;
    padding-bottom: 0;
    color: black;
  }

  tr:nth-child(even) {
    background: #ecf0f1;
  }
`;

export { StyledDataTable };
