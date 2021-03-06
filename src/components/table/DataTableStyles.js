import styled from 'styled-components';

const DataTableStyled = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  margin-bottom: 5rem;
  border: 1px solid lightgrey;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: auto;

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  td {
    vertical-align: bottom;
    text-align: center;
    padding: 1rem;
    padding-bottom: 0;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
  }

  th {
    vertical-align: bottom;
    text-align: center;
    padding: 1rem;
    padding-bottom: 0;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

const DataTableBodyStyled = styled.tbody`
  tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
export { DataTableStyled, DataTableBodyStyled };
