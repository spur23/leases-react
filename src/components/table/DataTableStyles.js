import styled from 'styled-components';

const DataTableStyled = styled.table`
  border-collapse: collapse;
  width: 50%;
  /* margin: auto; */
  margin-bottom: 5rem;
  /* border: thin solid lightgrey; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: auto;

  td {
    vertical-align: bottom;
    text-align: center;
    padding: 1rem;
    padding-bottom: 0;
    border-bottom: thin solid #95a5a6;
    border-top: thin solid #95a5a6;
  }

  th {
    vertical-align: bottom;
    text-align: center;
    padding: 1rem;
    padding-bottom: 0;
    border-bottom: thin solid gray;
    border-top: thin solid gray;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #2ecc71;
    color: #ffffff;
  }
`;

const DataTableBodyStyled = styled.tbody`
  tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
export { DataTableStyled, DataTableBodyStyled };
