import styled from 'styled-components';

const DataTableStyled = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin-bottom: 5rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  overflow: auto;

  tr {
    background: #f7f9f9;
  }
  td {
    vertical-align: bottom;
    text-align: center;
    padding: 2rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  th {
    vertical-align: bottom;
    text-align: center;
    padding-bottom: 0;
    background-color: #2ecc71;
    color: #ffffff;
  }
`;

const DataTableBodyStyled = styled.tbody`
  /* tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  } */
`;
export { DataTableStyled, DataTableBodyStyled };
