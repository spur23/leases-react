import { capitalizeFirstLetter } from '../../helpers/utils';
// import { DataTableStyled, DataTableBodyStyled } from './DataTableStyles';

interface Config {
  data: {}[];
}

/**
 * Generates the rows for the data table
 * @param dataArray
 * @returns
 */
const createTableRows = (dataArray: {}[]) => (
  <tbody>
    {dataArray.map((row, index) => (
      <tr key={`${row}-${index}`}>
        {Object.keys(row).map((key) => {
          if (typeof row[key] === 'number') {
            return (
              <td key={key}>
                {new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2
                }).format(row[key])}
              </td>
            );
          }
          return <td key={key}>{row[key]}</td>;
        })}
      </tr>
    ))}
  </tbody>
);

/**
 * Generates the headers from an array of objects
 * @param dataArray
 * @returns
 */
const createTableHeaders = (dataArray: {}[]) => {
  const headers = Object.keys(dataArray[0]);
  let result = [];
  headers
    .map((header) => header.split(/(?=[A-Z])/))
    .forEach((el) => {
      let combinedText = '';
      for (let i = 0; i < el.length; i++) {
        combinedText = combinedText + ' ' + capitalizeFirstLetter(el[i]);
      }
      result.push(combinedText);
    });

  return (
    <thead>
      <tr>
        {result.map((word, index) => (
          <th key={`${word}-${index}`}>{word}</th>
        ))}
      </tr>
    </thead>
  );
};

/**
 * Datatable that automatically converts and array of objects to a table
 * with headers
 * @param props
 * @returns
 */
const DataTable = (props: Config) => {
  const { data } = props;

  const tableRows = createTableRows(data);
  const tableHeader = createTableHeaders(data);

  return (
    <table>
      {tableHeader}
      {tableRows}
    </table>
  );
};

export default DataTable;
